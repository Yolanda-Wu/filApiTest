import PDFJS from "pdfjs-dist";

PDFJS.GlobalWorkerOptions.workerSrc = "pdfjs-dist/build/pdf.worker.js";

var url = "https://github.com/Yolanda-Wu/filApiTest/raw/master/pdf.pdf";

PDFJS.getDocument(url)
  .then(pdf => {
    return pdf.getPage(1);
  })
  .then(page => {
    // 设置展示比例
    var scale = 1.5;
    // 获取pdf尺寸
    var viewport = page.getViewport(scale);
    // 获取需要渲染的元素
    var canvas = document.getElementById("pdf-canvas");
    var context = canvas.getContext("2d");
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };

    page.render(renderContext);
  });

let src = "ppt.ppt";

let file = `https://view.officeapps.live.com/op/view.aspx?src=https://github.com/Yolanda-Wu/filApiTest/raw/master/${src}`;

window.onload = function() {
  let viwer = document.getElementsByClassName("viewer")[0];

  viwer.src = file;
};
