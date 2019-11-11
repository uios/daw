if('serviceWorker' in navigator) {
  //navigator.serviceWorker.register('sw.js');
  //navigator.serviceWorker.addEventListener('message', event => {
    //if(event.data.typ === 'notification') { notify(event.data.msg, event.data.exp); }
  //});
} 
Array.prototype.iO = function(a) { a ? a.disconnect() : void 0; a = new IntersectionObserver(function(changes, observer) { changes.forEach(function (change) { change.intersectionRatio > 0 ? change.target.loadImage() && observer.unobserve(change.target) : null; }); }, { threshold: 0.01 }); ('IntersectionObserver' in window) ? this.forEach(function (img) { return a.observe(img);}) : this.forEach(function(image) { return image.loadImage(); }); }
Element.prototype.wheel = function(q,t,that=this,p=q===undefined ? 0 : q.index()) {
  return new Promise(function(resolve, reject) { 
    t ? that.dataset.section = p : that.style.transform = 'translateX(-' + p + '00%)';
    resolve(that.children[p]);
    $(that.childNodes).removeClass('on');  that.children[p].classList.add('on');  
    var beltElem = that.closest('.tab').querySelector('[data-belt]');
    beltElem ? belt(beltElem,p) : null;
    that.parentNode.dataset.bt = p;
  });
};
window.is = {
  local: () => { return window.location.origin.includes('localhost') ? true : false; },
  mobile: () => { /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? $(document.body).attr({'data-mobi': true}) : document.body.dataset.mobi ? document.body.removeAttribute('data-mobi') : null; },
  numeric: a => { return a===0 || parseInt(a)>0 ? true : false; }
}
window.mc = {img:null};
function ajax(url, settings) { //console.log(url,settings);
  return new Promise((resolve, reject) => { var req;
    if(settings && settings.dataType === 'POST') { req = new Request(url, { method: 'POST', body: (settings.data ? JSON.stringify(settings.data) : null), headers: new Headers() }); } else { req = url; }
    fetch(req).then(response => response.text()).then(res => { try { resolve(res); } catch(e) { resolve(e); } });
  });
}  
function byId(id) { return document.getElementById(id); }
function init() {
  document.body.removeAttribute('data-nojs');
  firebase.initializeApp(auth.config); 
  firebase.auth().onAuthStateChanged(event => auth.change(event));
  window.location.pathname.router();
}
function notify(json) { var counter = json.counter, message = json.message; alerts.push(json);
  return new Promise((resolve, reject) => { var note = byId('notify');
    if(!note.classList.contains('push')) { note.dataset.cnt = counter; $(note).addClass('push')[0].find('.notify-detail').innerHTML = message; }
    var interval = setInterval(() => { note.dataset.cnt = counter; counter--; 
      if(counter === 0 || !counter) { alerts.shift(); $(note).removeClass('push')[0].removeAttribute('data-cnt'); }
    },1000);
    note.addEventListener('transitionend', () => { 
      if(!note.classList.contains('push')) { clearInterval(interval); resolve((alerts.length>0 ? notify(alerts[0]) : null)); }      
    });
  });
}
function qs(el) { return document.querySelector(el); }
function section(r,s=r==='' ? '/' : r) {
  var r = route.get.path.dir(s)[0] ?  route.get.path.dir(s)[0] : "/"; var k=0;
  for(container of Object.keys(routes)) {
    if(Object.keys(Object.values(routes)[k]).includes(r)) {
      if(Object.keys(Object.values(routes)[k][r]).includes(s)) { return Object.keys(routes)[k]; }
    } k++;
  }
}
function themeColor(color) { document.querySelector("meta[name=theme-color]").setAttribute("content", color); document.body.style.backgroundColor = color; }