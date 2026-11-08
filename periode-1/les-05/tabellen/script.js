const assignments = [
    // First 10 exercises: Fill in the blanks with color words
    { id: 1, type: 'fill-blanks', title: "Vraag 1.1", 
      solution: '<table>\n  <tr>\n    <td>Orange</td>\n  </tr>\n  <tr>\n    <td>Purple</td>\n  </tr>\n  <tr>\n    <td>Pink</td>\n  </tr>\n</table>',
      template: '<table>\n  <tr>\n    <td>___</td>\n  </tr>\n  <tr>\n    <td>Purple</td>\n  </tr>\n  <tr>\n    <td>___</td>\n  </tr>\n</table>',
      blanks: ['Orange', 'Pink'] },
    
    { id: 2, type: 'fill-blanks', title: "Vraag 1.2", 
      solution: '<table>\n  <tr>\n    <td>Red</td>\n    <td>Blue</td>\n  </tr>\n  <tr>\n    <td>Green</td>\n    <td>Yellow</td>\n  </tr>\n</table>',
      template: '<table>\n  <tr>\n    <td>___</td>\n    <td>Blue</td>\n  </tr>\n  <tr>\n    <td>Green</td>\n    <td>___</td>\n  </tr>\n</table>',
      blanks: ['Red', 'Yellow'] },
    
    { id: 3, type: 'fill-blanks', title: "Vraag 1.3", 
      solution: '<table>\n  <tr>\n    <td>Black</td>\n    <td>White</td>\n    <td>Gray</td>\n  </tr>\n  <tr>\n    <td>Brown</td>\n    <td>Red</td>\n    <td>Blue</td>\n  </tr>\n</table>',
      template: '<table>\n  <tr>\n    <td>___</td>\n    <td>White</td>\n    <td>___</td>\n  </tr>\n  <tr>\n    <td>Brown</td>\n    <td>___</td>\n    <td>Blue</td>\n  </tr>\n</table>',
      blanks: ['Black', 'Gray', 'Red'] },
    
    { id: 4, type: 'fill-blanks', title: "Vraag 1.4", 
      solution: '<table>\n  <tr>\n    <td>Green</td>\n    <td>Yellow</td>\n    <td>Orange</td>\n  </tr>\n  <tr>\n    <td>Purple</td>\n    <td>Pink</td>\n    <td>Red</td>\n  </tr>\n  <tr>\n    <td>Blue</td>\n    <td>Black</td>\n    <td>White</td>\n  </tr>\n</table>',
      template: '<table>\n  <tr>\n    <td>Green</td>\n    <td>___</td>\n    <td>Orange</td>\n  </tr>\n  <tr>\n    <td>___</td>\n    <td>Pink</td>\n    <td>___</td>\n  </tr>\n  <tr>\n    <td>Blue</td>\n    <td>Black</td>\n    <td>___</td>\n  </tr>\n</table>',
      blanks: ['Yellow', 'Purple', 'Red', 'White'] },
    
    { id: 5, type: 'fill-blanks', title: "Vraag 1.5", 
      solution: '<table>\n  <tr>\n    <td>Red</td>\n    <td>Blue</td>\n    <td>Green</td>\n  </tr>\n  <tr>\n    <td>Yellow</td>\n    <td>Orange</td>\n    <td>Purple</td>\n  </tr>\n  <tr>\n    <td>Pink</td>\n    <td>Brown</td>\n    <td>Black</td>\n  </tr>\n</table>',
      template: '<table>\n  <tr>\n    <td>___</td>\n    <td>Blue</td>\n    <td>Green</td>\n  </tr>\n  <tr>\n    <td>Yellow</td>\n    <td>___</td>\n    <td>Purple</td>\n  </tr>\n  <tr>\n    <td>Pink</td>\n    <td>Brown</td>\n    <td>___</td>\n  </tr>\n</table>',
      blanks: ['Red', 'Orange', 'Black'] },
    
    // Exercises 6-10: Fill in the blanks with headers (th)
    { id: 6, type: 'fill-blanks', title: "Vraag 1.6", 
      solution: '<table>\n  <tr>\n    <th>Red</th>\n    <th>Blue</th>\n  </tr>\n  <tr>\n    <td>Green</td>\n    <td>Yellow</td>\n  </tr>\n</table>',
      template: '<table>\n  <tr>\n    <th>___</th>\n    <th>Blue</th>\n  </tr>\n  <tr>\n    <td>Green</td>\n    <td>___</td>\n  </tr>\n</table>',
      blanks: ['Red', 'Yellow'] },
    
    { id: 7, type: 'fill-blanks', title: "Vraag 1.7", 
      solution: '<table>\n  <tr>\n    <th>Orange</th>\n    <th>Purple</th>\n    <th>Pink</th>\n  </tr>\n  <tr>\n    <td>Brown</td>\n    <td>Red</td>\n    <td>Blue</td>\n  </tr>\n  <tr>\n    <td>Green</td>\n    <td>Yellow</td>\n    <td>Black</td>\n  </tr>\n</table>',
      template: '<table>\n  <tr>\n    <th>___</th>\n    <th>Purple</th>\n    <th>Pink</th>\n  </tr>\n  <tr>\n    <td>Brown</td>\n    <td>___</td>\n    <td>Blue</td>\n  </tr>\n  <tr>\n    <td>Green</td>\n    <td>Yellow</td>\n    <td>___</td>\n  </tr>\n</table>',
      blanks: ['Orange', 'Red', 'Black'] },
    
    { id: 8, type: 'fill-blanks', title: "Vraag 1.8", 
      solution: '<table>\n  <tr>\n    <th>Red</th>\n    <th>Blue</th>\n    <th>Green</th>\n  </tr>\n  <tr>\n    <td>Yellow</td>\n    <td>Orange</td>\n    <td>Purple</td>\n  </tr>\n  <tr>\n    <td>Pink</td>\n    <td>Brown</td>\n    <td>Black</td>\n  </tr>\n  <tr>\n    <td>White</td>\n    <td>Gray</td>\n    <td>Red</td>\n  </tr>\n</table>',
      template: '<table>\n  <tr>\n    <th>___</th>\n    <th>Blue</th>\n    <th>Green</th>\n  </tr>\n  <tr>\n    <td>Yellow</td>\n    <td>___</td>\n    <td>Purple</td>\n  </tr>\n  <tr>\n    <td>Pink</td>\n    <td>Brown</td>\n    <td>___</td>\n  </tr>\n  <tr>\n    <td>White</td>\n    <td>Gray</td>\n    <td>___</td>\n  </tr>\n</table>',
      blanks: ['Red', 'Orange', 'Black', 'Red'] },
    
    { id: 9, type: 'fill-blanks', title: "Vraag 1.9", 
      solution: '<table>\n  <tr>\n    <th>Green</th>\n    <th>Yellow</th>\n    <th>Orange</th>\n    <th>Purple</th>\n    <th>Pink</th>\n  </tr>\n  <tr>\n    <td>Brown</td>\n    <td>Red</td>\n    <td>Blue</td>\n    <td>Black</td>\n    <td>White</td>\n  </tr>\n</table>',
      template: '<table>\n  <tr>\n    <th>Green</th>\n    <th>___</th>\n    <th>Orange</th>\n    <th>Purple</th>\n    <th>___</th>\n  </tr>\n  <tr>\n    <td>Brown</td>\n    <td>Red</td>\n    <td>___</td>\n    <td>Black</td>\n    <td>___</td>\n  </tr>\n</table>',
      blanks: ['Yellow', 'Pink', 'Blue', 'White'] },
    
    { id: 10, type: 'fill-blanks', title: "Vraag 1.10", 
      solution: '<table>\n  <tr>\n    <th>Red</th>\n    <th>Blue</th>\n    <th>Green</th>\n    <th>Yellow</th>\n  </tr>\n  <tr>\n    <td>Orange</td>\n    <td>Purple</td>\n    <td>Pink</td>\n    <td>Brown</td>\n  </tr>\n  <tr>\n    <td>Black</td>\n    <td>White</td>\n    <td>Gray</td>\n    <td>Red</td>\n  </tr>\n  <tr>\n    <td>Blue</td>\n    <td>Green</td>\n    <td>Yellow</td>\n    <td>Orange</td>\n  </tr>\n  <tr>\n    <td>Purple</td>\n    <td>Pink</td>\n    <td>Brown</td>\n    <td>Black</td>\n  </tr>\n</table>',
      template: '<table>\n  <tr>\n    <th>___</th>\n    <th>Blue</th>\n    <th>Green</th>\n    <th>Yellow</th>\n  </tr>\n  <tr>\n    <td>Orange</td>\n    <td>___</td>\n    <td>Pink</td>\n    <td>Brown</td>\n  </tr>\n  <tr>\n    <td>Black</td>\n    <td>White</td>\n    <td>___</td>\n    <td>Red</td>\n  </tr>\n  <tr>\n    <td>Blue</td>\n    <td>Green</td>\n    <td>Yellow</td>\n    <td>___</td>\n  </tr>\n  <tr>\n    <td>Purple</td>\n    <td>Pink</td>\n    <td>Brown</td>\n    <td>___</td>\n  </tr>\n</table>',
      blanks: ['Red', 'Purple', 'Gray', 'Orange', 'Black'] },

    // Exercises 11-20: Fill in HTML tags (td, th, tr, table)
    { id: 11, type: 'fill-tags', title: "Vraag 2.1", 
      solution: '<table>\n  <tr>\n    <td>Red</td>\n    <td>Blue</td>\n  </tr>\n</table>',
      template: '<___>\n  <___>\n    <td>Red</td>\n    <td>Blue</td>\n  </___>\n</___>',
      blanks: ['table', 'tr', 'tr', 'table'] },
    
    { id: 12, type: 'fill-tags', title: "Vraag 2.2", 
      solution: '<table>\n  <tr>\n    <td>Green</td>\n  </tr>\n  <tr>\n    <td>Yellow</td>\n  </tr>\n  <tr>\n    <td>Orange</td>\n  </tr>\n</table>',
      template: '<___>\n  <___>\n    <td>Green</td>\n  </___>\n  <___>\n    <td>Yellow</td>\n  </___>\n  <___>\n    <td>Orange</td>\n  </___>\n</___>',
      blanks: ['table', 'tr', 'tr', 'tr', 'tr', 'tr', 'tr', 'table'] },
    
    { id: 13, type: 'fill-tags', title: "Vraag 2.3", 
      solution: '<table>\n  <tr>\n    <td>Purple</td>\n    <td>Pink</td>\n    <td>Brown</td>\n  </tr>\n  <tr>\n    <td>Red</td>\n    <td>Blue</td>\n    <td>Black</td>\n  </tr>\n</table>',
      template: '<___>\n  <___>\n    <___>Purple</___>\n    <td>Pink</td>\n    <___>Brown</___>\n  </___>\n  <___>\n    <td>Red</td>\n    <___>Blue</___>\n    <td>Black</td>\n  </___>\n</___>',
      blanks: ['table', 'tr', 'td', 'td', 'tr', 'tr', 'td', 'tr', 'table'] },
    
    { id: 14, type: 'fill-tags', title: "Vraag 2.4", 
      solution: '<table>\n  <tr>\n    <td>White</td>\n    <td>Gray</td>\n  </tr>\n  <tr>\n    <td>Green</td>\n    <td>Yellow</td>\n  </tr>\n  <tr>\n    <td>Orange</td>\n    <td>Purple</td>\n  </tr>\n  <tr>\n    <td>Pink</td>\n    <td>Brown</td>\n  </tr>\n</table>',
      template: '<___>\n  <___>\n    <___>White</___>\n    <td>Gray</td>\n  </___>\n  <___>\n    <td>Green</td>\n    <___>Yellow</___>\n  </___>\n  <___>\n    <___>Orange</___>\n    <td>Purple</td>\n  </___>\n  <___>\n    <td>Pink</td>\n    <___>Brown</___>\n  </___>\n</___>',
      blanks: ['table', 'tr', 'td', 'td', 'tr', 'tr', 'td', 'td', 'tr', 'tr', 'td', 'td', 'tr', 'tr', 'td', 'td', 'table'] },
    
    { id: 15, type: 'fill-tags', title: "Vraag 2.5", 
      solution: '<table>\n  <tr>\n    <th>Red</th>\n    <th>Blue</th>\n  </tr>\n  <tr>\n    <td>Green</td>\n    <td>Yellow</td>\n  </tr>\n</table>',
      template: '<___>\n  <___>\n    <___>Red</___>\n    <th>Blue</th>\n  </___>\n  <___>\n    <td>Green</td>\n    <___>Yellow</___>\n  </___>\n</___>',
      blanks: ['table', 'tr', 'th', 'th', 'tr', 'tr', 'td', 'td', 'tr', 'table'] },
    
    { id: 16, type: 'fill-tags', title: "Vraag 2.6", 
      solution: '<table>\n  <tr>\n    <th>Orange</th>\n    <th>Purple</th>\n    <th>Pink</th>\n  </tr>\n  <tr>\n    <td>Brown</td>\n    <td>Red</td>\n    <td>Blue</td>\n  </tr>\n  <tr>\n    <td>Green</td>\n    <td>Yellow</td>\n    <td>Black</td>\n  </tr>\n</table>',
      template: '<___>\n  <___>\n    <___>Orange</___>\n    <th>Purple</th>\n    <th>Pink</th>\n  </___>\n  <___>\n    <td>Brown</td>\n    <___>Red</___>\n    <td>Blue</td>\n  </___>\n  <___>\n    <td>Green</td>\n    <td>Yellow</td>\n    <___>Black</___>\n  </___>\n</___>',
      blanks: ['table', 'tr', 'th', 'th', 'tr', 'tr', 'td', 'td', 'tr', 'tr', 'td', 'td', 'tr', 'table'] },
    
    { id: 17, type: 'fill-tags', title: "Vraag 2.7", 
      solution: '<table>\n  <tr>\n    <th>White</th>\n    <th>Gray</th>\n    <th>Brown</th>\n    <th>Red</th>\n  </tr>\n  <tr>\n    <td>Blue</td>\n    <td>Green</td>\n    <td>Yellow</td>\n    <td>Orange</td>\n  </tr>\n  <tr>\n    <td>Purple</td>\n    <td>Pink</td>\n    <td>Black</td>\n    <td>White</td>\n  </tr>\n</table>',
      template: '<___>\n  <___>\n    <___>White</___>\n    <th>Gray</th>\n    <th>Brown</th>\n    <___>Red</___>\n  </___>\n  <___>\n    <td>Blue</td>\n    <___>Green</___>\n    <td>Yellow</td>\n    <___>Orange</___>\n  </___>\n  <___>\n    <___>Purple</___>\n    <td>Pink</td>\n    <td>Black</td>\n    <___>White</___>\n  </___>\n</___>',
      blanks: ['table', 'tr', 'th', 'th', 'tr', 'tr', 'td', 'td', 'tr', 'tr', 'td', 'td', 'tr', 'table'] },
    
    { id: 18, type: 'fill-tags', title: "Vraag 2.8", 
      solution: '<table>\n  <tr>\n    <th>Red</th>\n    <th>Blue</th>\n    <th>Green</th>\n  </tr>\n  <tr>\n    <td>Yellow</td>\n    <td>Orange</td>\n    <td>Purple</td>\n  </tr>\n  <tr>\n    <td>Pink</td>\n    <td>Brown</td>\n    <td>Black</td>\n  </tr>\n  <tr>\n    <td>White</td>\n    <td>Gray</td>\n    <td>Red</td>\n  </tr>\n</table>',
      template: '<___>\n  <___>\n    <___>Red</___>\n    <th>Blue</th>\n    <th>Green</th>\n  </___>\n  <___>\n    <td>Yellow</td>\n    <___>Orange</___>\n    <td>Purple</td>\n  </___>\n  <___>\n    <td>Pink</td>\n    <td>Brown</td>\n    <___>Black</___>\n  </___>\n  <___>\n    <___>White</___>\n    <td>Gray</td>\n    <td>Red</td>\n  </___>\n</___>',
      blanks: ['table', 'tr', 'th', 'th', 'tr', 'tr', 'td', 'td', 'tr', 'tr', 'td', 'td', 'tr', 'tr', 'td', 'td', 'tr', 'table'] },
    
    { id: 19, type: 'fill-tags', title: "Vraag 2.9", 
      solution: '<table>\n  <tr>\n    <th>Green</th>\n    <th>Yellow</th>\n    <th>Orange</th>\n    <th>Purple</th>\n    <th>Pink</th>\n  </tr>\n  <tr>\n    <td>Brown</td>\n    <td>Red</td>\n    <td>Blue</td>\n    <td>Black</td>\n    <td>White</td>\n  </tr>\n</table>',
      template: '<___>\n  <___>\n    <th>Green</th>\n    <___>Yellow</___>\n    <th>Orange</th>\n    <th>Purple</th>\n    <___>Pink</___>\n  </___>\n  <___>\n    <td>Brown</td>\n    <td>Red</td>\n    <___>Blue</___>\n    <td>Black</td>\n    <___>White</___>\n  </___>\n</___>',
      blanks: ['table', 'tr', 'th', 'th', 'tr', 'tr', 'td', 'td', 'tr', 'table'] },
    
    { id: 20, type: 'fill-tags', title: "Vraag 2.10", 
      solution: '<table>\n  <tr>\n    <th>Red</th>\n    <th>Blue</th>\n    <th>Green</th>\n    <th>Yellow</th>\n  </tr>\n  <tr>\n    <td>Orange</td>\n    <td>Purple</td>\n    <td>Pink</td>\n    <td>Brown</td>\n  </tr>\n  <tr>\n    <td>Black</td>\n    <td>White</td>\n    <td>Gray</td>\n    <td>Red</td>\n  </tr>\n  <tr>\n    <td>Blue</td>\n    <td>Green</td>\n    <td>Yellow</td>\n    <td>Orange</td>\n  </tr>\n  <tr>\n    <td>Purple</td>\n    <td>Pink</td>\n    <td>Brown</td>\n    <td>Black</td>\n  </tr>\n</table>',
      template: '<___>\n  <___>\n    <___>Red</___>\n    <th>Blue</th>\n    <th>Green</th>\n    <th>Yellow</th>\n  </___>\n  <___>\n    <td>Orange</td>\n    <___>Purple</___>\n    <td>Pink</td>\n    <td>Brown</td>\n  </___>\n  <___>\n    <td>Black</td>\n    <td>White</td>\n    <___>Gray</___>\n    <td>Red</td>\n  </___>\n  <___>\n    <td>Blue</td>\n    <td>Green</td>\n    <td>Yellow</td>\n    <___>Orange</___>\n  </___>\n  <___>\n    <td>Purple</td>\n    <td>Pink</td>\n    <td>Brown</td>\n    <___>Black</___>\n  </___>\n</___>',
      blanks: ['table', 'tr', 'th', 'th', 'tr', 'tr', 'td', 'td', 'tr', 'tr', 'td', 'td', 'tr', 'tr', 'td', 'td', 'tr', 'tr', 'td', 'td', 'tr', 'table'] },
  
    // Exercises 21-35: Full HTML recreation with color words
    { id: 21, type: 'textarea', title: "Vraag 3.1", 
      solution: '<table>\n  <tr>\n    <td>Green</td>\n    <td>Yellow</td>\n  </tr>\n</table>', 
      initial: '' },
    
    { id: 22, type: 'textarea', title: "Vraag 3.2", 
      solution: '<table>\n  <tr>\n    <td>Orange</td>\n    <td>Purple</td>\n    <td>Pink</td>\n  </tr>\n</table>', 
      initial: '' },
    
    { id: 23, type: 'textarea', title: "Vraag 3.3", 
      solution: '<table>\n  <tr>\n    <th>Brown</th>\n    <th>Black</th>\n  </tr>\n  <tr>\n    <td>White</td>\n    <td>Gray</td>\n  </tr>\n</table>', 
      initial: '' },
    
    { id: 24, type: 'textarea', title: "Vraag 3.4", 
      solution: '<table>\n  <tr>\n    <td>Red</td>\n    <td>Blue</td>\n  </tr>\n  <tr>\n    <td>Green</td>\n    <td>Yellow</td>\n  </tr>\n</table>', 
      initial: '' },
    
    { id: 25, type: 'textarea', title: "Vraag 3.5", 
      solution: '<table>\n  <tr>\n    <td>Orange</td>\n    <td>Purple</td>\n    <td>Pink</td>\n  </tr>\n  <tr>\n    <td>Brown</td>\n    <td>Black</td>\n    <td>White</td>\n  </tr>\n</table>', 
      initial: '' },
    
    { id: 26, type: 'textarea', title: "Vraag 3.6", 
      solution: '<table>\n  <tr>\n    <th>Gray</th>\n    <th>Red</th>\n  </tr>\n  <tr>\n    <td>Blue</td>\n    <td>Green</td>\n  </tr>\n  <tr>\n    <td>Yellow</td>\n    <td>Orange</td>\n  </tr>\n</table>', 
      initial: '' },
    
    { id: 27, type: 'textarea', title: "Vraag 3.7", 
      solution: '<table>\n  <tr>\n    <td>Purple</td>\n    <td>Pink</td>\n    <td>Brown</td>\n  </tr>\n  <tr>\n    <td>Black</td>\n    <td>White</td>\n    <td>Gray</td>\n  </tr>\n</table>', 
      initial: '' },
    
    { id: 28, type: 'textarea', title: "Vraag 3.8", 
      solution: '<table>\n  <tr>\n    <th>Red</th>\n    <th>Blue</th>\n  </tr>\n  <tr>\n    <td>Green</td>\n    <td>Yellow</td>\n  </tr>\n  <tr>\n    <td>Orange</td>\n    <td>Purple</td>\n  </tr>\n  <tr>\n    <td>Pink</td>\n    <td>Brown</td>\n  </tr>\n</table>', 
      initial: '' },
    
    { id: 29, type: 'textarea', title: "Vraag 3.9", 
      solution: '<table>\n  <tr>\n    <td>Black</td>\n    <td>White</td>\n    <td>Gray</td>\n  </tr>\n  <tr>\n    <td>Red</td>\n    <td>Blue</td>\n    <td>Green</td>\n  </tr>\n  <tr>\n    <td>Yellow</td>\n    <td>Orange</td>\n    <td>Purple</td>\n  </tr>\n</table>', 
      initial: '' },
    
    { id: 30, type: 'textarea', title: "Vraag 3.10", 
      solution: '<table>\n  <tr>\n    <th>Pink</th>\n    <th>Brown</th>\n  </tr>\n  <tr>\n    <td>Black</td>\n    <td>White</td>\n  </tr>\n  <tr>\n    <td>Gray</td>\n    <td>Red</td>\n  </tr>\n  <tr>\n    <td>Blue</td>\n    <td>Green</td>\n  </tr>\n  <tr>\n    <td>Yellow</td>\n    <td>Orange</td>\n  </tr>\n</table>', 
      initial: '' },
    
    { id: 31, type: 'textarea', title: "Vraag 3.11", 
      solution: '<table>\n  <tr>\n    <th>Purple</th>\n    <th>Pink</th>\n  </tr>\n  <tr>\n    <td>Brown</td>\n    <td>Black</td>\n  </tr>\n  <tr>\n    <td>White</td>\n    <td>Gray</td>\n  </tr>\n  <tr>\n    <td>Red</td>\n    <td>Blue</td>\n  </tr>\n  <tr>\n    <td>Green</td>\n    <td>Yellow</td>\n  </tr>\n</table>', 
      initial: '' },
    
    { id: 32, type: 'textarea', title: "Vraag 3.12", 
      solution: '<table>\n  <tr>\n    <td>Orange</td>\n    <td>Purple</td>\n    <td>Pink</td>\n  </tr>\n  <tr>\n    <td>Brown</td>\n    <td>Black</td>\n    <td>White</td>\n  </tr>\n  <tr>\n    <td>Gray</td>\n    <td>Red</td>\n    <td>Blue</td>\n  </tr>\n  <tr>\n    <td>Green</td>\n    <td>Yellow</td>\n    <td>Orange</td>\n  </tr>\n</table>', 
      initial: '' },
    
    { id: 33, type: 'textarea', title: "Vraag 3.13", 
      solution: '<table>\n  <tr>\n    <th>Purple</th>\n    <th>Pink</th>\n  </tr>\n  <tr>\n    <td>Brown</td>\n    <td>Black</td>\n  </tr>\n  <tr>\n    <td>White</td>\n    <td>Gray</td>\n  </tr>\n  <tr>\n    <td>Red</td>\n    <td>Blue</td>\n  </tr>\n  <tr>\n    <td>Green</td>\n    <td>Yellow</td>\n  </tr>\n  <tr>\n    <td>Orange</td>\n    <td>Purple</td>\n  </tr>\n</table>', 
      initial: '' },
    
    { id: 34, type: 'textarea', title: "Vraag 3.14", 
      solution: '<table>\n  <tr>\n    <th>Pink</th>\n    <th>Brown</th>\n  </tr>\n  <tr>\n    <td>Black</td>\n    <td>White</td>\n  </tr>\n  <tr>\n    <td>Gray</td>\n    <td>Red</td>\n  </tr>\n  <tr>\n    <td>Blue</td>\n    <td>Green</td>\n  </tr>\n  <tr>\n    <td>Yellow</td>\n    <td>Orange</td>\n  </tr>\n  <tr>\n    <td>Purple</td>\n    <td>Pink</td>\n  </tr>\n</table>', 
      initial: '' },
    
    { id: 35, type: 'textarea', title: "Vraag 3.15", 
      solution: '<table>\n  <tr>\n    <th>Brown</th>\n    <th>Black</th>\n    <th>White</th>\n  </tr>\n  <tr>\n    <td>Gray</td>\n    <td>Red</td>\n    <td>Blue</td>\n  </tr>\n  <tr>\n    <td>Green</td>\n    <td>Yellow</td>\n    <td>Orange</td>\n  </tr>\n  <tr>\n    <td>Purple</td>\n    <td>Pink</td>\n    <td>Brown</td>\n  </tr>\n  <tr>\n    <td>Black</td>\n    <td>White</td>\n    <td>Gray</td>\n  </tr>\n</table>', 
      initial: '' }
  ];

function normalizeHTML(html) {
  // Remove extra whitespace and normalize the HTML
  return html.replace(/\s+/g, ' ').trim().toLowerCase();
}

function createAssignmentHTML(assignment) {
  if (assignment.type === 'fill-blanks') {
    return `
      <div class="opdracht_${assignment.id}">
        <h3>${assignment.title}</h3>
        <p>Vul de ontbrekende kleuren in de HTML-code hieronder in. Vervang de ___ met de juiste kleurnamen.</p>
        <div class="assignment-container">
          <div>
            <textarea id="htmlInput${assignment.id}" rows="8" class="assignment-textarea"></textarea>
            <button type="button" class="reset-button" onclick="resetTextarea(${assignment.id})">Reset</button>
          </div>
          <div class="assignment-flex-row">
            <div>
              <strong>Preview:</strong>
              <div id="htmlPreviewWrap${assignment.id}" class="table-preview-wrap">
                <h4>Jouw tabel:</h4>
                <div id="htmlPreview${assignment.id}"></div>
              </div>
            </div>
            <div>
              <strong>Voorbeeld:</strong>
              <div id="htmlExampleWrap${assignment.id}" class="table-preview-wrap">
                <h4>Gewenste tabel:</h4>
                <div id="htmlExample${assignment.id}"></div>
              </div>
            </div>
          </div>
          <div class="feedback opdracht_${assignment.id}" id="feedback${assignment.id}"></div>
        </div>
      </div>
    `;
  }
  
  if (assignment.type === 'fill-tags') {
    return `
      <div class="opdracht_${assignment.id}">
        <h3>${assignment.title}</h3>
        <p>Vul de ontbrekende HTML-tags in de code hieronder in. Vervang de ___ met de juiste tags (table, td, th, of tr).</p>
        <div class="assignment-container">
          <div>
            <textarea id="htmlInput${assignment.id}" rows="8" class="assignment-textarea"></textarea>
            <button type="button" class="reset-button" onclick="resetTextarea(${assignment.id})">Reset</button>
          </div>
          <div class="assignment-flex-row">
            <div>
              <strong>Preview:</strong>
              <div id="htmlPreviewWrap${assignment.id}" class="table-preview-wrap">
                <h4>Jouw tabel:</h4>
                <div id="htmlPreview${assignment.id}"></div>
              </div>
            </div>
            <div>
              <strong>Voorbeeld:</strong>
              <div id="htmlExampleWrap${assignment.id}" class="table-preview-wrap">
                <h4>Gewenste tabel:</h4>
                <div id="htmlExample${assignment.id}"></div>
              </div>
            </div>
          </div>
          <div class="feedback opdracht_${assignment.id}" id="feedback${assignment.id}"></div>
        </div>
      </div>
    `;
  }
  
  if (assignment.type === 'textarea') {
  return `
    <div class="opdracht_${assignment.id}">
      <h3>${assignment.title}</h3>
        <p>Typ de volledige HTML-code voor de tabel hieronder:</p>
      <div class="assignment-container">
        <div>
            <textarea id="htmlInput${assignment.id}" rows="8" class="assignment-textarea"></textarea>
            <button type="button" class="reset-button" onclick="resetTextarea(${assignment.id})">Reset</button>
        </div>
        <div class="assignment-flex-row">
          <div>
            <strong>Preview:</strong>
            <div id="htmlPreviewWrap${assignment.id}" class="table-preview-wrap">
              <h4>Jouw tabel:</h4>
              <div id="htmlPreview${assignment.id}"></div>
            </div>
          </div>
          <div>
            <strong>Voorbeeld:</strong>
            <div id="htmlExampleWrap${assignment.id}" class="table-preview-wrap">
              <h4>Gewenste tabel:</h4>
              <div id="htmlExample${assignment.id}"></div>
            </div>
          </div>
        </div>
        <div class="feedback opdracht_${assignment.id}" id="feedback${assignment.id}"></div>
      </div>
    </div>
  `;
  }
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
  
  const totalScoreElement = document.getElementById('totalScore');
  if (totalScoreElement) {
    totalScoreElement.textContent = `(${correct}/${total})`;
  }
}

function checkFillBlanksAnswer(assignment) {
  const input = document.getElementById(`htmlInput${assignment.id}`).value;
  const previewDiv = document.getElementById(`htmlPreview${assignment.id}`);
  
  // Show preview of current HTML
  previewDiv.innerHTML = input;
  
  // Check if HTML matches solution (ignore all whitespace)
  const normalizedInput = input.replace(/\s/g, '');
  const normalizedSolution = assignment.solution.replace(/\s/g, '');
  
  if (normalizedInput === normalizedSolution) {
    document.getElementById(`feedback${assignment.id}`).innerHTML = '<span class="party-check">&#10003;</span>';
  } else {
    // Check if correct when ignoring case
    const normalizedInputLower = normalizedInput.toLowerCase();
    const normalizedSolutionLower = normalizedSolution.toLowerCase();
    if (normalizedInputLower === normalizedSolutionLower) {
      document.getElementById(`feedback${assignment.id}`).innerHTML = 'Let op hoofd- en kleine letters';
    } else {
      document.getElementById(`feedback${assignment.id}`).innerHTML = '';
    }
  }
  
  updateScore();
}

function checkFillTagsAnswer(assignment) {
  const input = document.getElementById(`htmlInput${assignment.id}`).value;
  const previewDiv = document.getElementById(`htmlPreview${assignment.id}`);
  
  // Update preview
  previewDiv.innerHTML = input;
  
  // Check if HTML matches solution (ignore all whitespace)
  const normalizedInput = input.replace(/\s/g, '');
  const normalizedSolution = assignment.solution.replace(/\s/g, '');
  
  if (normalizedInput === normalizedSolution) {
    document.getElementById(`feedback${assignment.id}`).innerHTML = '<span class="party-check">&#10003;</span>';
    updateScore();
  } else {
    // Check if correct when ignoring case
    const normalizedInputLower = normalizedInput.toLowerCase();
    const normalizedSolutionLower = normalizedSolution.toLowerCase();
    if (normalizedInputLower === normalizedSolutionLower) {
      document.getElementById(`feedback${assignment.id}`).innerHTML = 'Let op hoofd- en kleine letters';
    } else {
      document.getElementById(`feedback${assignment.id}`).innerHTML = '';
    }
  }
}

function addCellFeedback(assignment, exampleDiv, userInput) {
  const exampleTable = exampleDiv.querySelector('table');
  if (!exampleTable) return;
  
  // Remove any existing tips
  const existingTips = exampleDiv.querySelectorAll('.case-tip');
  existingTips.forEach(tip => tip.remove());
  
  // Get all cells from the example table
  const exampleCells = exampleTable.querySelectorAll('td, th');
  
  // Parse user input to get their current values
  const userTable = document.createElement('div');
  userTable.innerHTML = userInput;
  const userCells = userTable.querySelectorAll('td, th');
  
  exampleCells.forEach((cell, index) => {
    if (index < userCells.length) {
      const exampleText = cell.textContent.trim();
      const userText = userCells[index].textContent.trim();
      
      // Remove existing feedback classes
      cell.classList.remove('cell-correct', 'cell-incorrect', 'cell-case-warning');
      
      if (userText === exampleText && userText !== '' && userText !== '___') {
        // User has the correct value
        cell.classList.add('cell-correct');
      } else if (userText.toLowerCase() === exampleText.toLowerCase() && userText !== '' && userText !== '___') {
        // User has correct word but wrong casing
        cell.classList.add('cell-case-warning');
        
        // Add tip near this cell
        const tip = document.createElement('div');
        tip.className = 'case-tip';
        tip.textContent = 'Tip: Let op hoofd- en kleine letters.';
        tip.style.position = 'absolute';
        tip.style.background = '#fff3cd';
        tip.style.border = '1px solid #ffeaa7';
        tip.style.borderRadius = '4px';
        tip.style.padding = '4px 8px';
        tip.style.fontSize = '12px';
        tip.style.color = '#856404';
        tip.style.zIndex = '1000';
        tip.style.pointerEvents = 'none';
        
        // Position tip near the cell
        const rect = cell.getBoundingClientRect();
        const tableRect = exampleTable.getBoundingClientRect();
        tip.style.left = (rect.left - tableRect.left + rect.width / 2) + 'px';
        tip.style.top = (rect.bottom - tableRect.top + 5) + 'px';
        tip.style.transform = 'translateX(-50%)';
        
        exampleDiv.style.position = 'relative';
        exampleDiv.appendChild(tip);
      } else {
        // User has incorrect value, empty, or still has ___
        cell.classList.add('cell-incorrect');
      }
    }
  });
}

function updateTabStatus() {
  // Check completion status for each tab
  const tab1Assignments = assignments.filter(a => a.id <= 10);
  const tab2Assignments = assignments.filter(a => a.id > 10 && a.id <= 20);
  const tab3Assignments = assignments.filter(a => a.id > 20);
  
  // Count completed exercises for each tab
  const tab1CompletedCount = tab1Assignments.filter(assignment => {
    const feedback = document.getElementById(`feedback${assignment.id}`);
    return feedback && feedback.innerHTML.includes('party-check');
  }).length;
  
  const tab2CompletedCount = tab2Assignments.filter(assignment => {
    const feedback = document.getElementById(`feedback${assignment.id}`);
    return feedback && feedback.innerHTML.includes('party-check');
  }).length;
  
  const tab3CompletedCount = tab3Assignments.filter(assignment => {
    const feedback = document.getElementById(`feedback${assignment.id}`);
    return feedback && feedback.innerHTML.includes('party-check');
  }).length;
  
  const tab1Completed = tab1CompletedCount === tab1Assignments.length;
  const tab2Completed = tab2CompletedCount === tab2Assignments.length;
  const tab3Completed = tab3CompletedCount === tab3Assignments.length;
  
  // Update tab button styles and progress
  const tab1Button = document.getElementById('tab1');
  const tab2Button = document.getElementById('tab2');
  const tab3Button = document.getElementById('tab3');
  
  // Check if tab was just completed (for animation trigger)
  const tab1WasCompleted = tab1Button.classList.contains('completed');
  const tab2WasCompleted = tab2Button.classList.contains('completed');
  const tab3WasCompleted = tab3Button.classList.contains('completed');
  
  tab1Button.classList.remove('completed', 'incomplete');
  tab2Button.classList.remove('completed', 'incomplete');
  tab3Button.classList.remove('completed', 'incomplete');
  
  // Update tab text with progress
  tab1Button.innerHTML = `Oefening 1 (${tab1CompletedCount}/${tab1Assignments.length})`;
  tab2Button.innerHTML = `Oefening 2 (${tab2CompletedCount}/${tab2Assignments.length})`;
  tab3Button.innerHTML = `Oefening 3 (${tab3CompletedCount}/${tab3Assignments.length})`;
  
  if (tab1Completed) {
    tab1Button.classList.add('completed');
    // Trigger animation if just completed
    if (!tab1WasCompleted) {
      tab1Button.style.animation = 'none';
      tab1Button.offsetHeight; // Trigger reflow
      tab1Button.style.animation = null;
    }
  } else {
    tab1Button.classList.add('incomplete');
  }
  
  if (tab2Completed) {
    tab2Button.classList.add('completed');
    // Trigger animation if just completed
    if (!tab2WasCompleted) {
      tab2Button.style.animation = 'none';
      tab2Button.offsetHeight; // Trigger reflow
      tab2Button.style.animation = null;
    }
  } else {
    tab2Button.classList.add('incomplete');
  }
  
  if (tab3Completed) {
    tab3Button.classList.add('completed');
    // Trigger animation if just completed
    if (!tab3WasCompleted) {
      tab3Button.style.animation = 'none';
      tab3Button.offsetHeight; // Trigger reflow
      tab3Button.style.animation = null;
    }
  } else {
    tab3Button.classList.add('incomplete');
  }
}

function switchTab(tabNumber) {
  // Hide all tab panels
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  
  // Remove active class from all tab buttons
  document.querySelectorAll('.tab-button').forEach(button => {
    button.classList.remove('active');
  });
  
  // Show selected tab panel and activate button
  document.getElementById(`assignments${tabNumber}`).classList.add('active');
  document.getElementById(`tab${tabNumber}`).classList.add('active');
}

window.addEventListener('DOMContentLoaded', () => {
  // Split assignments into three groups
  const assignments1 = assignments.filter(a => a.id <= 10);
  const assignments2 = assignments.filter(a => a.id > 10 && a.id <= 20);
  const assignments3 = assignments.filter(a => a.id > 20);
  
  // Populate tab panels
  document.getElementById('assignments1').innerHTML = assignments1.map(createAssignmentHTML).join('');
  document.getElementById('assignments2').innerHTML = assignments2.map(createAssignmentHTML).join('');
  document.getElementById('assignments3').innerHTML = assignments3.map(createAssignmentHTML).join('');

  // Add tab button event listeners
  document.getElementById('tab1').addEventListener('click', () => switchTab(1));
  document.getElementById('tab2').addEventListener('click', () => switchTab(2));
  document.getElementById('tab3').addEventListener('click', () => switchTab(3));

  assignments.forEach(assignment => {
    // Set example table
    const exampleDiv = document.getElementById(`htmlExample${assignment.id}`);
    exampleDiv.innerHTML = assignment.solution;
    
    if (assignment.type === 'fill-blanks') {
      // Set initial template for fill-blanks
      const textarea = document.getElementById(`htmlInput${assignment.id}`);
      textarea.value = assignment.template || '';
      
      // Live preview and feedback for fill-blanks
      function updatePreviewAndFeedback() {
        checkFillBlanksAnswer(assignment);
        updateTabStatus();
      }
      
      document.getElementById(`htmlInput${assignment.id}`).addEventListener('input', updatePreviewAndFeedback);
      updatePreviewAndFeedback();
    } else if (assignment.type === 'fill-tags') {
      // Set initial template for fill-tags
      const textarea = document.getElementById(`htmlInput${assignment.id}`);
      textarea.value = assignment.template || '';
      
      // Live preview and feedback for fill-tags
      function updatePreviewAndFeedback() {
        checkFillTagsAnswer(assignment);
        updateTabStatus();
      }
      
      document.getElementById(`htmlInput${assignment.id}`).addEventListener('input', updatePreviewAndFeedback);
      updatePreviewAndFeedback();
    } else if (assignment.type === 'textarea') {
      // Set initial values for textarea
      const textarea = document.getElementById(`htmlInput${assignment.id}`);
      textarea.value = assignment.initial || '';
      
      // Live preview and feedback for textarea
    function updatePreviewAndFeedback() {
      const input = document.getElementById(`htmlInput${assignment.id}`).value;
      const previewDiv = document.getElementById(`htmlPreview${assignment.id}`);
      
        // Direct HTML input
        previewDiv.innerHTML = input;
        
        // Check if HTML matches solution (ignore all whitespace)
        const normalizedInput = input.replace(/\s/g, '');
        const normalizedSolution = assignment.solution.replace(/\s/g, '');
        
        if (normalizedInput === normalizedSolution) {
          document.getElementById(`feedback${assignment.id}`).innerHTML = '<span class="party-check">&#10003;</span>';
        } else {
          // Check if correct when ignoring case
          const normalizedInputLower = normalizedInput.toLowerCase();
          const normalizedSolutionLower = normalizedSolution.toLowerCase();
          if (normalizedInputLower === normalizedSolutionLower) {
            document.getElementById(`feedback${assignment.id}`).innerHTML = 'Let op hoofd- en kleine letters';
          } else {
            document.getElementById(`feedback${assignment.id}`).innerHTML = '';
          }
        }
        
        updateScore();
        updateTabStatus();
      }
      
      document.getElementById(`htmlInput${assignment.id}`).addEventListener('input', updatePreviewAndFeedback);
      updatePreviewAndFeedback();
    }
  });
  
  // Initialize tab status
  updateTabStatus();
});

function resetTextarea(assignmentId) {
  const assignment = assignments.find(a => a.id === assignmentId);
  if (!assignment) return;
  
  const textarea = document.getElementById(`htmlInput${assignmentId}`);
  if (!textarea) return;
  
  // Reset to original content based on assignment type
  if (assignment.type === 'fill-blanks' || assignment.type === 'fill-tags') {
    textarea.value = assignment.template || '';
  } else if (assignment.type === 'textarea') {
    textarea.value = assignment.initial || '';
  }
  
  // Trigger the input event to update preview and feedback
  textarea.dispatchEvent(new Event('input'));
}

