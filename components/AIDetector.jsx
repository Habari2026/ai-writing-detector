import React, { useState } from 'react';
import { AlertCircle, BookOpen, Search } from 'lucide-react';

const AIWritingDetector = () => {
  const [text, setText] = useState('');
  const [analyzed, setAnalyzed] = useState(false);
  const [detections, setDetections] = useState([]);
  const [showLegend, setShowLegend] = useState(true);

  // AI tell patterns organized by category
  const patterns = {
    aiVocabulary: {
      name: 'AI Vocabulary',
      color: 'bg-red-200',
      patterns: [
        /\b(delve|delving|delves)\b/gi,
        /\b(showcase|showcases|showcasing|showcased)\b/gi,
        /\b(underscore|underscores|underscoring|underscored)\b/gi,
        /\b(intricate|intricacies)\b/gi,
        /\btapestry\b/gi,
        /\b(pivotal)\b/gi,
        /\b(vibrant)\b/gi,
        /\b(testament)\b/gi,
        /\b(garnered|garnering)\b/gi,
        /\b(enhance|enhances|enhancing)\b/gi,
        /\b(fostering)\b/gi,
        /\b(aligns|aligning|align)\b/gi,
        /\benduring\b/gi,
        /\blandscape\b(?! (painting|photography|architect))/gi,
      ],
      description: 'Words statistically overused by LLMs compared to human writing'
    },
    emphasisPhrases: {
      name: 'Undue Emphasis',
      color: 'bg-orange-200',
      patterns: [
        /\b(stands|serves) as\b/gi,
        /\bis a testament to\b/gi,
        /\bplays? a (vital|significant|crucial|pivotal) role\b/gi,
        /\b(underscores|highlights) (its|the) (importance|significance)\b/gi,
        /\b(reflecting|emphasizing|highlighting|showcasing|underscoring)\b/gi,
        /\bindelible mark\b/gi,
        /\bdeeply rooted\b/gi,
        /\bprofound heritage\b/gi,
      ],
      description: 'Phrases that artificially inflate importance or create superficial analysis'
    },
    promotional: {
      name: 'Promotional Language',
      color: 'bg-yellow-200',
      patterns: [
        /\bnestled (in|within)\b/gi,
        /\bin the heart of\b/gi,
        /\bboasts a\b/gi,
        /\b(stunning|breathtaking) (natural )?beauty\b/gi,
        /\b(enduring|lasting) legacy\b/gi,
        /\bcontinues to captivate\b/gi,
        /\bgroundbreaking\b/gi,
      ],
      description: 'Advertisement-like or promotional-sounding language'
    },
    didactic: {
      name: 'Didactic Disclaimers',
      color: 'bg-blue-200',
      patterns: [
        /\bit'?s (important|critical|crucial) to (note|remember|consider)\b/gi,
        /\bthat said,?\b/gi,
        /\bmay vary\b/gi,
      ],
      description: 'Unnecessary editorializing disclaimers to an imagined reader'
    },
    summaries: {
      name: 'Section Summaries',
      color: 'bg-purple-200',
      patterns: [
        /\b(in summary|in conclusion|overall),?\b/gi,
      ],
      description: 'Formulaic paragraph or section summaries'
    },
    challenges: {
      name: 'Challenge Patterns',
      color: 'bg-pink-200',
      patterns: [
        /\bdespite (its|these|the) [^,]+(,|\.|\b)\s*[^,]+ faces? (several )?challenges?\b/gi,
        /\bdespite these challenges\b/gi,
        /\bfuture (outlook|prospects)\b/gi,
      ],
      description: 'Rigid "despite challenges" formulations typical of AI conclusions'
    },
    parallelisms: {
      name: 'Negative Parallelisms',
      color: 'bg-green-200',
      patterns: [
        /\bnot (only|just) [^,]+,?\s*(but|it'?s)\b/gi,
      ],
      description: 'Formulaic "not just... but..." constructions'
    },
    ruleOfThree: {
      name: 'Rule of Three',
      color: 'bg-cyan-200',
      patterns: [
        // Match three adjectives or similar short words in a row
        /\b(\w{4,12}),\s+(\w{4,12}),?\s+and\s+(\w{4,12})\b/g,
      ],
      description: 'Potential overuse of three-item lists (common in AI writing, but verify manually)'
    },
  };

  const analyzeText = () => {
    if (!text.trim()) {
      return;
    }

    const found = [];

    // Collect all matches
    Object.entries(patterns).forEach(([category, config]) => {
      config.patterns.forEach(pattern => {
        const matches = [...text.matchAll(pattern)];
        matches.forEach(match => {
          found.push({
            category,
            name: config.name,
            color: config.color,
            description: config.description,
            text: match[0],
            index: match.index,
            length: match[0].length,
            endIndex: match.index + match[0].length
          });
        });
      });
    });

    // Sort by index, then by length (longer matches first if same start position)
    found.sort((a, b) => {
      if (a.index === b.index) {
        return b.length - a.length; // Prefer longer matches
      }
      return a.index - b.index;
    });

    // Remove overlapping matches (keep first/longer match at each position)
    const nonOverlapping = [];
    let lastEndIndex = -1;
    
    found.forEach(detection => {
      // Only include if it starts after the last match ended
      if (detection.index >= lastEndIndex) {
        nonOverlapping.push(detection);
        lastEndIndex = detection.endIndex;
      }
    });

    // Build highlighted text with spans
    let processedIndex = 0;
    let highlighted = '';
    
    nonOverlapping.forEach((detection) => {
      // Add text before match (only if there's text to add)
      if (detection.index > processedIndex) {
        highlighted += escapeHtml(text.slice(processedIndex, detection.index));
      }
      
      // Add highlighted match
      highlighted += `<mark class="${detection.color} px-1 rounded" title="${escapeHtml(detection.name + ': ' + detection.description)}">${escapeHtml(detection.text)}</mark>`;
      
      processedIndex = detection.endIndex;
    });
    
    // Add remaining text
    if (processedIndex < text.length) {
      highlighted += escapeHtml(text.slice(processedIndex));
    }

    setDetections(nonOverlapping);
    setAnalyzed(true);
    
    // Update text display
    setTimeout(() => {
      const display = document.getElementById('analyzed-text');
      if (display) {
        display.innerHTML = highlighted;
      }
    }, 10);
  };

  const escapeHtml = (str) => {
    if (str == null) return '';
    const div = document.createElement('div');
    div.textContent = String(str);
    return div.innerHTML;
  };

  const reset = () => {
    setText('');
    setAnalyzed(false);
    setDetections([]);
  };

  // Count detections by category
  const categoryCounts = {};
  detections.forEach(d => {
    categoryCounts[d.name] = (categoryCounts[d.name] || 0) + 1;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">AI Writing Detection Tool</h1>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <div className="flex items-start gap-2">
              <BookOpen className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-blue-900 font-medium mb-1">Educational Tool</p>
                <p className="text-sm text-blue-800">
                  This tool identifies common patterns in AI-generated text based on Wikipedia's{' '}
                  <a 
                    href="https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    "Signs of AI Writing"
                  </a>{' '}
                  research. Use it to learn how to write more naturally and recognize AI tells in your own writing.
                </p>
              </div>
            </div>
          </div>

          {!analyzed ? (
            <>
              <textarea
                className="w-full h-64 p-4 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none font-mono text-sm"
                placeholder="Paste your text here to analyze for AI writing patterns..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              
              <button
                onClick={analyzeText}
                disabled={!text.trim()}
                className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Analyze Text
              </button>
            </>
          ) : (
            <>
              <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-indigo-600" />
                  <span className="font-medium text-gray-700">
                    {detections.length === 0 ? (
                      'No obvious AI tells detected! 🎉'
                    ) : (
                      `Found ${detections.length} potential AI tell${detections.length !== 1 ? 's' : ''}`
                    )}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowLegend(!showLegend)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm"
                  >
                    {showLegend ? 'Hide' : 'Show'} Legend
                  </button>
                  <button
                    onClick={reset}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm"
                  >
                    Analyze New Text
                  </button>
                </div>
              </div>

              {detections.length === 0 && (
                <div className="mb-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                  <p className="text-sm text-green-800">
                    This text doesn't contain obvious AI writing patterns from our detection library. 
                    However, this doesn't guarantee it's human-written - sophisticated AI use or 
                    well-edited AI content may not trigger these specific patterns.
                  </p>
                </div>
              )}

              {showLegend && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">Detection Categories:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {Object.values(patterns).map((config) => {
                      const count = categoryCounts[config.name] || 0;
                      return (
                        <div key={config.name} className="flex items-start gap-2">
                          <div className={`w-4 h-4 ${config.color} rounded mt-1 flex-shrink-0`}></div>
                          <div className="flex-1">
                            <span className="font-medium text-sm text-gray-700">{config.name}</span>
                            <span className={`text-xs ml-2 ${count > 0 ? 'text-gray-700 font-semibold' : 'text-gray-400'}`}>
                              ({count} found)
                            </span>
                            <p className="text-xs text-gray-600 mt-0.5">{config.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div 
                id="analyzed-text"
                className="p-4 border-2 border-gray-300 rounded-lg bg-white font-mono text-sm leading-relaxed whitespace-pre-wrap max-h-96 overflow-y-auto"
              >
                {text}
              </div>

              <div className="mt-4 text-sm text-gray-600">
                <p className="font-medium mb-2">💡 Tips for improving your writing:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Replace highlighted words with simpler, more natural alternatives</li>
                  <li>Remove unnecessary emphasis on importance or significance</li>
                  <li>Avoid promotional language - stick to neutral, factual descriptions</li>
                  <li>Cut didactic phrases - trust your reader to understand</li>
                  <li>Remove formulaic summaries - let your content speak for itself</li>
                </ul>
              </div>
            </>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">About This Tool</h2>
          <p className="text-sm text-gray-700 mb-3">
            This educational tool is based on Wikipedia's comprehensive research document{' '}
            <a 
              href="https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 underline"
            >
              "Signs of AI Writing"
            </a>
            , which catalogs patterns observed across thousands of instances of AI-generated text. The patterns
            identified here are statistically overrepresented in LLM outputs compared to human writing.
          </p>
          <p className="text-sm text-gray-700 mb-3">
            <strong>Important:</strong> Not all highlighted text is necessarily AI-generated. Humans can and do
            use these words and phrases. However, when many of these patterns appear together, especially
            post-2022, it often indicates LLM involvement.
          </p>
          <p className="text-sm text-gray-700">
            <strong>Use this tool to:</strong> Learn to recognize AI writing patterns • Improve your own writing
            • Understand why certain phrasings sound "AI-like" • Develop more natural, authentic voice
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIWritingDetector;
