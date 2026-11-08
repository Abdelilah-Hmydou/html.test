const assignments = [
    { id: 1, type: 'fields', title: "Voorbeeld 1", solution: 'width: 250px; height: 250px; padding: 5px; margin: 10px; border: 10px;', initial: 'width: ; height: ;' },
    { id: 2, type: 'fields', title: "Opdracht 1", solution: 'width: 100px; height: 50px;', initial: 'width: ; height: ;' },
    { id: 3, type: 'fields', title: "Opdracht 2", solution: 'width: 75px; height: 150px; border: 5px;', initial: 'width: ; height: ; border: ;' },
    { id: 4, type: 'fields', title: "Opdracht 3", solution: 'width: 200px; height: 75px; padding: 10px;', initial: 'width: ; height: ; padding: ;' },
    { id: 5, type: 'fields', title: "Opdracht 4", solution: 'width: 125px; height: 125px; margin: 15px;', initial: 'width: ; height: ; margin: ;' },
    { id: 6, type: 'fields', title: "Opdracht 5", solution: 'width: 50px; height: 250px; border: 10px; margin: 20px;', initial: 'width: ; height: ; border: ; margin: ;' },
    { id: 7, type: 'fields', title: "Opdracht 6", solution: 'width: 225px; height: 100px; border: 5px; padding: 5px; margin: 10px;', initial: 'width: ; height: ; border: ; padding: ; margin: ;' },
    { id: 8, type: 'fields', title: "Opdracht 7", solution: 'width: 75px; height: 175px; border: 15px; padding: 10px; margin: 25px;', initial: 'width: ; height: ; border: ; padding: ; margin: ;' },
    { id: 9, type: 'fields', title: "Opdracht 8", solution: 'width: 100px; height: 225px; border: 5px; padding: 15px; margin: 20px;', initial: 'width: ; height: ; border: ; padding: ; margin: ;' },
    { id: 10, type: 'fields', title: "Opdracht 9", solution: 'width: 150px; height: 75px; border: 10px; padding: 20px; margin: 15px;', initial: 'width: ; height: ; border: ; padding: ; margin: ;' },
    { id:11, type: 'fields', title: "Opdracht 10", solution: 'width: 125px; height: 200px; border: 5px; padding: 10px; margin: 30px;', initial: 'width: ; height: ; border: ; padding: ; margin: ;' },
  
    { id:12, type: 'textarea', title: "Voorbeeld 2", solution: 'width: 250px; height: 250px; padding: 5px; margin: 10px; border: 10px;', initial: 'width: 250px;' },
    { id:13, type: 'textarea', title: "Opdracht 11", solution: 'width: 100px; height: 50px;', initial: '' },
    { id:14, type: 'textarea', title: "Opdracht 12", solution: 'width: 75px; height: 150px; border: 5px;', initial: '' },
    { id:15, type: 'textarea', title: "Opdracht 13", solution: 'width: 200px; height: 75px; padding: 10px;', initial: '' },
    { id:16, type: 'textarea', title: "Opdracht 14", solution: 'width: 125px; height: 125px; margin: 15px;', initial: '' },
    { id:17, type: 'textarea', title: "Opdracht 15", solution: 'width: 50px; height: 250px; border: 10px; margin: 20px;', initial: '' },
    { id:18, type: 'textarea', title: "Opdracht 16", solution: 'width: 225px; height: 100px; border: 5px; padding: 5px; margin: 10px;', initial: '' },
    { id:19, type: 'textarea', title: "Opdracht 17", solution: 'width: 75px; height: 175px; border: 15px; padding: 10px; margin: 25px;', initial: '' },
    { id:20, type: 'textarea', title: "Opdracht 18", solution: 'width: 100px; height: 225px; border: 5px; padding: 15px; margin: 20px;', initial: '' },
    { id:21, type: 'textarea', title: "Opdracht 19", solution: 'width: 150px; height: 75px; border: 10px; padding: 20px; margin: 15px;', initial: '' },
    { id:22, type: 'textarea', title: "Opdracht 20", solution: 'width: 125px; height: 200px; border: 5px; padding: 10px; margin: 30px;', initial: '' },
  ];
  
function parseCSSDeclarations(css) {
  const obj = {};
  css.split(';').forEach(decl => {
    const [prop, val] = decl.split(':').map(s => s && s.trim());
    if (prop && val) obj[prop] = val;
  });
  return obj;
}

function createAssignmentHTML(assignment) {
  // suf is '' for id 0, otherwise the id
  const suf = assignment.id === 0 ? '' : assignment.id;
  if (assignment.type === 'textarea') {
    return `
      <div class="opdracht_${assignment.id}">
        <h3>${assignment.title}</h3>
        <p>Typ de volledige CSS-declaraties voor de box hieronder (zonder selector of accolades):</p>
        <div class="assignment-container">
          <div>
            <textarea id="cssInput${assignment.id}" rows="8" class="assignment-textarea"></textarea>
          </div>
          <div class="assignment-flex-row">
            <div>
              <strong>Preview:</strong>
              <div id="cssPreviewWrap${assignment.id}" class="box-preview-wrap">
                <div id="cssPreviewMarginBox${assignment.id}" class="margin-box">
                  <div id="cssPreviewBorderBox${assignment.id}" class="border-box">
                    <div id="cssPreviewPaddingBox${assignment.id}" class="padding-box">
                      <div id="cssPreviewContentBox${assignment.id}" class="content-box">Content</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <strong>Voorbeeld:</strong>
              <div id="cssExampleWrap${assignment.id}" class="box-preview-wrap">
                <div id="cssExampleMarginBox${assignment.id}" class="margin-box">
                  <div id="cssExampleBorderBox${assignment.id}" class="border-box">
                    <div id="cssExamplePaddingBox${assignment.id}" class="padding-box">
                      <div id="cssExampleContentBox${assignment.id}" class="content-box">Content</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="feedback opdracht_${assignment.id}" id="feedback${assignment.id}"></div>
        </div>
      </div>
    `;
  }
  // Default: fields
  return `
    <div class="opdracht_${assignment.id}">
      <h3>${assignment.title}</h3>
      <p>Vul de juiste waarden in om de box overeen te laten komen met het voorbeeld.</p>
      <div class="assignment-container">
        <div>
          <label data-label="Margin:"><input type="text" id="margin${suf}"></label>
          <label data-label="Border Width:"><input type="text" id="border${suf}"></label>
          <label data-label="Padding:"><input type="text" id="padding${suf}"></label>
          <label data-label="Width:"><input type="text" id="width${suf}"></label>
          <label data-label="Height:"><input type="text" id="height${suf}"></label>
          <input type="hidden" id="cssInput${assignment.id}">
        </div>
        <div class="assignment-flex-row">
          <div>
            <strong>Preview:</strong>
            <div id="cssPreviewWrap${assignment.id}" class="box-preview-wrap">
              <div id="cssPreviewMarginBox${assignment.id}" class="margin-box">
                <div id="cssPreviewBorderBox${assignment.id}" class="border-box">
                  <div id="cssPreviewPaddingBox${assignment.id}" class="padding-box">
                    <div id="cssPreviewContentBox${assignment.id}" class="content-box">Content</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <strong>Voorbeeld:</strong>
            <div id="cssExampleWrap${assignment.id}" class="box-preview-wrap">
              <div id="cssExampleMarginBox${assignment.id}" class="margin-box">
                <div id="cssExampleBorderBox${assignment.id}" class="border-box">
                  <div id="cssExamplePaddingBox${assignment.id}" class="padding-box">
                    <div id="cssExampleContentBox${assignment.id}" class="content-box">Content</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="feedback opdracht_${assignment.id}" id="feedback${assignment.id}"></div>
      </div>
    </div>
  `;
}

function updateScore() {
  const total = assignments.length;
  let correct = 0;
  assignments.forEach(assignment => {
    const feedback = document.getElementById(`feedback${assignment.id}`);
    if (feedback && feedback.innerHTML.includes('party-check')) {
      correct++;
    }
  });
  // Update alleen het eerste h2-element met 'Score:' in de uitleg-box
  const uitlegBox = document.querySelector('.box-uitleg-fixed');
  if (uitlegBox) {
    const scoreH2 = Array.from(uitlegBox.querySelectorAll('h2')).find(h2 => h2.textContent.trim().startsWith('Score:'));
    if (scoreH2) {
      scoreH2.textContent = `Score: ${correct}/${total}`;
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('assignments').innerHTML = assignments.map(createAssignmentHTML).join('');

  assignments.forEach(assignment => {
    // suf is '' for id 0, otherwise the id
    const suf = assignment.id === 0 ? '' : assignment.id;
    // Set initial values
    if (assignment.type === 'textarea') {
      const textarea = document.getElementById(`cssInput${assignment.id}`);
      textarea.value = assignment.initial || '';
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
    } else {
      // Split initial string into fields
      const decls = parseCSSDeclarations(assignment.initial);
      document.getElementById('margin' + suf).value = decls['margin'] ? decls['margin'] + ';' : '';
      document.getElementById('border' + suf).value = decls['border'] ? decls['border'] + ';' : '';
      document.getElementById('padding' + suf).value = decls['padding'] ? decls['padding'] + ';' : '';
      document.getElementById('width' + suf).value = decls['width'] ? decls['width'] + ';' : '';
      document.getElementById('height' + suf).value = decls['height'] ? decls['height'] + ';' : '';
      // Set hidden input for feedback/preview
      function updateHiddenInput() {
        const margin = document.getElementById('margin' + suf).value.trim().replace(/;$/, '');
        const border = document.getElementById('border' + suf).value.trim().replace(/;$/, '');
        const padding = document.getElementById('padding' + suf).value.trim().replace(/;$/, '');
        const width = document.getElementById('width' + suf).value.trim().replace(/;$/, '');
        const height = document.getElementById('height' + suf).value.trim().replace(/;$/, '');
        let css = '';
        if (margin) css += `margin: ${margin}; `;
        if (border) css += `border: ${border}; `;
        if (padding) css += `padding: ${padding}; `;
        if (width) css += `width: ${width}; `;
        if (height) css += `height: ${height}; `;
        document.getElementById(`cssInput${assignment.id}`).value = css.trim();
      }
      ['margin','border','padding','width','height'].forEach(key => {
        document.getElementById(key + suf).addEventListener('input', updateHiddenInput);
      });
      updateHiddenInput();
    }
    // IDs for preview/example
    const previewIds = {
      marginBox: `cssPreviewMarginBox${assignment.id}`,
      borderBox: `cssPreviewBorderBox${assignment.id}`,
      paddingBox: `cssPreviewPaddingBox${assignment.id}`,
      contentBox: `cssPreviewContentBox${assignment.id}`
    };
    const exampleIds = {
      marginBox: `cssExampleMarginBox${assignment.id}`,
      borderBox: `cssExampleBorderBox${assignment.id}`,
      paddingBox: `cssExamplePaddingBox${assignment.id}`,
      contentBox: `cssExampleContentBox${assignment.id}`
    };
    // Set example box
    const solutionDecls = parseCSSDeclarations(assignment.solution);
    applyBoxModelCSS(solutionDecls, exampleIds);
    // Live preview and feedback
    function applyBoxModelCSS(decls, ids) {
      document.getElementById(ids.marginBox).style.padding = decls['margin'] || '';
      document.getElementById(ids.borderBox).style.padding = decls['border'] || '';
      document.getElementById(ids.borderBox).style.border = '';
      document.getElementById(ids.paddingBox).style.padding = decls['padding'] || '';
      document.getElementById(ids.contentBox).style.width = decls['width'] || '';
      document.getElementById(ids.contentBox).style.height = decls['height'] || '';
      document.getElementById(ids.contentBox).style.lineHeight = decls['height'] || '';
    }
    function cssObjectsEqual(a, b) {
      const keysA = Object.keys(a).filter(k => a[k] !== '');
      const keysB = Object.keys(b).filter(k => b[k] !== '');
      if (keysA.length !== keysB.length) return false;
      return keysA.every(key => b[key] && a[key] === b[key]);
    }
    function updatePreviewAndFeedback() {
      const css = document.getElementById(`cssInput${assignment.id}`).value;
      const decls = parseCSSDeclarations(css);
      applyBoxModelCSS(decls, previewIds);
      // Feedback: check if code matches solution (object-based, order/whitespace independent)
      const inputObj = parseCSSDeclarations(css);
      const solutionObj = parseCSSDeclarations(assignment.solution);
      if (cssObjectsEqual(inputObj, solutionObj)) {
        document.getElementById(`feedback${assignment.id}`).innerHTML = '<span class="party-check" style="font-size: 4rem;">&#10003;</span>';
      } else {
        document.getElementById(`feedback${assignment.id}`).innerHTML = '';
      }
      updateScore();
    }
    if (assignment.type === 'textarea') {
      document.getElementById(`cssInput${assignment.id}`).addEventListener('input', updatePreviewAndFeedback);
      updatePreviewAndFeedback();
    } else {
      ['margin','border','padding','width','height'].forEach(key => {
        document.getElementById(key + suf).addEventListener('input', updatePreviewAndFeedback);
      });
      updatePreviewAndFeedback();
    }
  });
}); 