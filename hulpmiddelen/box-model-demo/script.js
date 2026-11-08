document.addEventListener('DOMContentLoaded', function() {
  const textarea = document.getElementById('css-input');
  const marginBox = document.getElementById('box-preview');
  const borderBox = marginBox.querySelector('.border-box');
  const paddingBox = marginBox.querySelector('.padding-box');
  const contentBox = marginBox.querySelector('.content-box');
  const catImg = document.querySelector('.cat-img');
  const transparantCat = document.querySelector('.transparant-cat');

  function applyStyles() {
    const css = textarea.value;
    // Reset all styles
    marginBox.style = '';
    borderBox.style = '';
    paddingBox.style = '';
    contentBox.style = '';
    if (catImg) catImg.style = '';
    if (transparantCat) transparantCat.style = '';
    css.split(';').forEach(rule => {
      const [prop, value] = rule.split(':').map(s => s && s.trim());
      if (prop && value) {
        if (prop.startsWith('margin')) {
          // Visualize margin as padding on the marginBox
          marginBox.style.padding = value;
        }
        else if (prop.startsWith('border')) {
          // Only extract thickness (first value) for box model
          const thickness = value.split(' ')[0];
          borderBox.style.padding = thickness;
        }
        else if (prop.startsWith('padding')) paddingBox.style.padding = value;
        else if (
          prop === 'width' ||
          prop === 'height' ||
          prop === 'max-width' ||
          prop === 'min-width' ||
          prop === 'max-height' ||
          prop === 'min-height'
        ) {
          contentBox.style[prop] = value;
          if (transparantCat) transparantCat.style[prop] = value;
        }
        // Apply ALL properties to the cat image
        if (catImg) catImg.style[prop] = value;
      }
    });
  }

  textarea.addEventListener('input', applyStyles);
  applyStyles();
}); 