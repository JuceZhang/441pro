// Add your JavaScript code here  
document.querySelector('.zoom-in').addEventListener('click', function() {  
    var img = document.querySelector('.product-image');  
    var scale = parseFloat(getComputedStyle(img).transform) || 1;  
    img.style.transform = 'scale(' + (scale + 0.1) + ')';  
  });  
    
  document.querySelector('.zoom-out').addEventListener('click', function() {    
    var img = document.querySelector('.product-image');    
    var scale = 0.8; // 设置缩放比例为 0.8，即缩小到原始大小的 80%  
    img.style.transform = 'scale(' + scale + ')'; // 应用缩放变换  
    img.style.transition = 'transform 0.3s ease-in-out'; // 可选：添加过渡效果  
  });