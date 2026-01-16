import './style.css'

const dropZone = document.querySelector('#drop-zone');
const fileInput = document.querySelector('#file-input');
const status = document.querySelector('#status');
const result = document.querySelector('#result');
const downloadLink = document.querySelector('#download-link');
const infoText = document.querySelector('#info-text');
const qualityInput = document.querySelector('#quality');
const qualityValue = document.querySelector('#quality-value');

// Update quality label
qualityInput.addEventListener('input', (e) => {
  qualityValue.textContent = e.target.value;
});

// Click to browse
dropZone.addEventListener('click', () => fileInput.click());

// Drag events
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('drag-over');
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('drag-over');
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    handleFile(files[0]);
  }
});

fileInput.addEventListener('change', (e) => {
  if (e.target.files.length > 0) {
    handleFile(e.target.files[0]);
  }
});

async function handleFile(file) {
  if (!file.type.startsWith('image/jpeg') && !file.type.startsWith('image/jpg')) {
    showStatus('❌ JPG 形式の画像を選択してください', true);
    return;
  }

  showStatus('⏳ 変換中...');
  result.style.display = 'none';

  try {
    const webpBlob = await convertToWebP(file);
    const url = URL.createObjectURL(webpBlob);
    
    downloadLink.href = url;
    downloadLink.download = file.name.replace(/\.(jpg|jpeg)$/i, '.webp');
    
    const originalSize = (file.size / 1024).toFixed(1);
    const newSize = (webpBlob.size / 1024).toFixed(1);
    const reduction = (((file.size - webpBlob.size) / file.size) * 100).toFixed(1);

    infoText.innerHTML = `
      ✅ 変換完了！<br>
      <span style="font-size: 0.8rem; color: var(--text-muted);">
        ${originalSize}KB → ${newSize}KB (${reduction}% 削減)
      </span>
    `;
    
    showStatus('');
    result.style.display = 'block';
    
    // Auto-trigger download (optional, maybe better let user click since it's cleaner)
    // downloadLink.click();
    
  } catch (err) {
    console.error(err);
    showStatus('❌ 変換中にエラーが発生しました', true);
  }
}

function convertToWebP(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        
        const quality = parseInt(qualityInput.value) / 100;
        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
          else reject(new Error('Canvas conversion failed'));
        }, 'image/webp', quality);
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function showStatus(text, isError = false) {
  status.textContent = text;
  status.style.color = isError ? '#f87171' : 'var(--text-muted)';
}
