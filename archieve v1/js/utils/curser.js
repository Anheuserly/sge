 // Add custom cursor
 const cursor = document.createElement('div');
 cursor.classList.add('custom-cursor');
 document.body.appendChild(cursor);

 document.addEventListener('mousemove', (e) => {
     cursor.style.left = e.clientX + 'px';
     cursor.style.top = e.clientY + 'px';
 });

 // Add this CSS for the custom cursor
 const style = document.createElement('style');
 style.textContent = `
     .custom-cursor {
         width: 20px;
         height: 20px;
         border: 2px solid var(--primary-color);
         border-radius: 50%;
         position: fixed;
         pointer-events: none;
         z-index: 9999;
         transition: all 0.1s ease;
         transform: translate(-50%, -50%);
     }
 `;
 document.head.appendChild(style);
