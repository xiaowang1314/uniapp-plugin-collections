
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"button { margin-top: ",[0,100],"; }\n",],undefined,{path:"./pages/textscroll/textscroll.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/textscroll/textscroll.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      