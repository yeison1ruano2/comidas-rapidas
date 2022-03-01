const carrito=document.getElementById('carrito');
const cafes=document.getElementById('lista-cafe');
const listaCafes=document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn=document.getElementById('vaciar-carrito');

cargarEventListeners();
function cargarEventListeners(){
    cafes.addEventListener('click',comprarCafe);
    carrito.addEventListener('click',eliminarCafe);
    vaciarCarritoBtn.addEventListener('click',vaciarCarrito);
    document.addEventListener('DOMContentLoaded',leerLocalStorage)
}
function comprarCafe(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const  cafe=e.target.parentElement.parentElement;
        leerDatosCafe(cafe);
    }
}
function leerDatosCafe(cafe){
    const infoCafe={
        imagen:cafe.querySelector('img').src,
        titulo:cafe.querySelector('h4').textContent,
        precio:cafe.querySelector('.precio span').textContent,
        id:cafe.querySelector('a').getAttribute('date-id')
    }
    insertarCarrito(infoCafe);
}

function insertarCarrito(cafe){
    const row=document.createElement('tr');
    row.innerHTML=`
        <td>
            <img src="${cafe.imagen}" width=100>
        </td>
        <td>${cafe.titulo}</td>
        <td>${cafe.precio}</td>
        <td>
            <a href="#" class="borrar-cafe" data-id="${cafe.id}">X</a>
        </td>
    `;
    listaCafes.appendChild(row);
    guardarCafeLocalStorage(cafe);
}

function eliminarCafe(e){
    e.preventDefault();
    let cafe,
    cafeId;
    if(e.target.classList.contains('borrar-cafe')){
        e.target.parentElement.parentElement.remove();
        cafe=e.target.parentElement.parentElement;
        cafeId=cafe.querySelector('a').getAttribute('data-id');
    }
    eliminarCafeLocalStorage(cafeId);
}

function vaciarCarrito(){
    while(listaCafes.firstChild){
        listaCafes.removeChild(listaCafes.firstChild);
    }
    vaciarLocalStorage();
    return false;
}

function guardarCafeLocalStorage(cafe){
    let cafes;
    cafes=obtenerCafesLocalStorage();
    cafes.push(cafe);
    localStorage.setItem('cafes',JSON.stringify(cafes))
}

function obtenerCafesLocalStorage(){
    let cafesLS;
    if(localStorage.getItem('cafes')===null){
        cafesLS=[];
    }else{
        cafesLS=JSON.parse(localStorage.getItem('cafes'));
    }
    return cafesLS;
}

function leerLocalStorage(){
    let cafesLS;
    cafesLS=obtenerCafesLocalStorage();
    cafesLS.forEach(function(cafe){
        const row=document.createElement('tr');
        row.innerHTML=`
            <td>
                <img src="${cafe.imagen}" width=100>
            </td>
            <td>${cafe.titulo}</td>
            <td>${cafe.precio}</td>
            <td>
                <a href="#" class="borrar-cafe" data-id="${cafe.id}">X</a>
            </td>
        `;
        listaCafes.appendChild(row);
    });
}

function eliminarCafeLocalStorage(cafe){
let cafesLS;
cafesLS=obtenerCafesLocalStorage();
cafesLS.forEach(function(cafesLS,index){
    if(cafesLS.id===cafe){
        cafesLS.splice(index,1);
    }
    });
    localStorage.setItem('cafes',JSON.stringify(cafesLS));
}

function vaciarLocalStorage(){
    localStorage.clear();
}

/*Mensaje de Confirmacion*/

function Notification(htmlElement) {
    this.htmlElement = htmlElement;
    this.icon = htmlElement.querySelector('.icon > i');
    this.text = htmlElement.querySelector('.text');
    this.close = htmlElement.querySelector('.close');
    this.isRunning = false;
    this.timeout;
    
    this.bindEvents();
};

Notification.prototype.bindEvents = function() {
	var self = this;
    this.close.addEventListener('click', function() {
        window.clearTimeout(self.timeout);
        self.reset();
    });
}

Notification.prototype.confi = function(message) {
    if(this.isRunning) return false;
    
    this.text.innerHTML = message;
	this.htmlElement.className = 'notification confi';
    this.icon.className = 'fa fa-2x fa-check-circle';
    
    this.show();
}
Notification.prototype.confir = function(message) {
    if(this.isRunning) return false;
    
    this.text.innerHTML = message;
	this.htmlElement.className = 'notification confir';
    this.icon.className = 'fa fa-2x fa-check-circle';
    
    this.show();
}
Notification.prototype.confirm = function(message) {
    if(this.isRunning) return false;
    
    this.text.innerHTML = message;
	this.htmlElement.className = 'notification confirm';
    this.icon.className = 'fa fa-2x fa-check-circle';
    
    this.show();
}
Notification.prototype.conf = function(message) {
    if(this.isRunning) return false;
    
    this.text.innerHTML = message;
	this.htmlElement.className = 'notification conf';
    this.icon.className = 'fa fa-2x fa-check-circle';
    
    this.show();
}
Notification.prototype.con = function(message) {
    if(this.isRunning) return false;
    
    this.text.innerHTML = message;
	this.htmlElement.className = 'notification con';
    this.icon.className = 'fa fa-2x fa-check-circle';
    
    this.show();
}
Notification.prototype.caraagre = function(message) {
    if(this.isRunning) return false;
    
    this.text.innerHTML = message;
	this.htmlElement.className = 'notification caraagre';
    this.icon.className = 'fa fa-2x fa-check-circle';
    
    this.show();
}
Notification.prototype.lecheagre = function(message) {
    if(this.isRunning) return false;
    
    this.text.innerHTML = message;
	this.htmlElement.className = 'notification lecheagre';
    this.icon.className = 'fa fa-2x fa-check-circle';
    
    this.show();
}
Notification.prototype.bomagre = function(message) {
    if(this.isRunning) return false;
    
    this.text.innerHTML = message;
	this.htmlElement.className = 'notification bomagre';
    this.icon.className = 'fa fa-2x fa-check-circle';
    
    this.show();
}
Notification.prototype.capuagre = function(message) {
    if(this.isRunning) return false;
    
    this.text.innerHTML = message;
	this.htmlElement.className = 'notification capuagre';
    this.icon.className = 'fa fa-2x fa-check-circle';
    
    this.show();
}

Notification.prototype.show = function() {
    if(!this.htmlElement.classList.contains('visible'))
        this.htmlElement.classList.add('visible');
    
    this.isRunning = true;
    this.autoReset();
};

Notification.prototype.autoReset = function() {
	var self = this;
    this.timeout = window.setTimeout(function() {
        self.reset();
    }, 2000);
}

Notification.prototype.reset = function() {
	this.htmlElement.className = "notification";
    this.icon.className = "";
    this.isRunning = false;
};

document.addEventListener('DOMContentLoaded', init);

function init(){
    var confi=document.getElementById('confi');
    var confi1=document.getElementById('confir');
    var confi2=document.getElementById('confirm');
    var confi3=document.getElementById('conf');
    var confi4=document.getElementById('con');
    var confi5=document.getElementById('caraagre');
    var confi6=document.getElementById('lecheagre');
    var confi7=document.getElementById('bomagre');
    var confi8=document.getElementById('capuagre');
    var notificator=new Notification(document.querySelector('.notification'));
    var notificator1=new Notification(document.querySelector('.notification1'));
    var notificator2=new Notification(document.querySelector('.notification2'));
    var notificator3=new Notification(document.querySelector('.notification3'));
    var notificator4=new Notification(document.querySelector('.notification4'));
    var notificator5=new Notification(document.querySelector('.notification5'));
    var notificator6=new Notification(document.querySelector('.notification6'));
    var notificator7=new Notification(document.querySelector('.notification7'));
    var notificator8=new Notification(document.querySelector('.notification8'));

    confi.onclick=function(){
        notificator.confi('PRODUCTO AGREGADO');
    }
    confi1.onclick=function(){
        notificator1.confir('PRODUCTO AGREGADO');
    }
    confi2.onclick=function(){
        notificator2.confirm('PRODUCTO AGREGADO');
    }
    confi3.onclick=function(){
        notificator3.conf('PRODUCTO AGREGADO');
    }
    confi4.onclick=function(){
        notificator4.con('PRODUCTO AGREGADO');
    }
    confi5.onclick=function(){
        notificator5.caraagre('PRODUCTO AGREGADO');
    }
    confi6.onclick=function(){
        notificator6.lecheagre('PRODUCTO AGREGADO');
    }
    confi7.onclick=function(){
        notificator7.bomagre('PRODUCTO AGREGADO');
    }
    confi8.onclick=function(){
        notificator8.capuagre('PRODUCTO AGREGADO');
    }
}