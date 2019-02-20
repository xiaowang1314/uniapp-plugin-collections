
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"content { height: ",[0,400],"; }\n",],undefined,{path:"./pages/validcode/validcode.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/validcode/validcode.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      