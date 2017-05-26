var y,z,teclas,simbolo="";
teclas=document.getElementsByClassName("tecla")

var Calculadora={
    init: function(){
        this.listener();
    },
    
    listener: function(){
        
     var self=this 
 
     teclas[0].addEventListener("mousedown",function(){
        teclas[0].style="width:18%; margin-left:2%;"
        self.captura(teclas[0].id);
     })
     
     teclas[0].addEventListener("mouseout",function(){
         teclas[0].style="width:22%; margin-left:0%;"
     })
    
     teclas[0].addEventListener("mouseup",function(){
         teclas[0].style="width:22%; margin-left:0%;"
     })

     
    teclas[1].addEventListener("mousedown",function(){
        teclas[1].style="width:18%; margin-left:1%;"
        self.captura(teclas[1].id);
     })
     
     teclas[1].addEventListener("mouseout",function(){
         teclas[1].style="width:22%; margin-left:0%;"
     })
     
    teclas[1].addEventListener("mouseup",function(){
         teclas[1].style="width:22%; margin-left:0%;"
     })
    
    teclas[2].addEventListener("mousedown",function(){
        teclas[2].style="width:19%; margin-left:0%;"
        self.captura(teclas[2].id);
     })
     
     teclas[2].addEventListener("mouseout",function(){
         teclas[2].style="width:22%; margin-left:0%;"
     })

     teclas[2].addEventListener("mouseup",function(){
         teclas[2].style="width:22%; margin-left:0%;"
     })
     
    teclas[3].addEventListener("mousedown",function(){
        teclas[3].style="width:19%; margin-right:1%;"
        self.captura(teclas[3].id);
     })
     
     teclas[3].addEventListener("mouseout",function(){
         teclas[3].style="width:22%; margin-left:0%;"
     })

     teclas[3].addEventListener("mouseup",function(){
         teclas[3].style="width:22%; margin-left:0%;"
     })
     
    teclas[4].addEventListener("mousedown",function(){
        teclas[4].style="width:18%; margin-left:2%;"
        self.captura(teclas[4].id);
     })
     
     teclas[4].addEventListener("mouseout",function(){
         teclas[4].style="width:22%; margin-left:0%;"
     })
     
     teclas[4].addEventListener("mouseup",function(){
         teclas[4].style="width:22%; margin-left:0%;"
     })
     
    teclas[5].addEventListener("mousedown",function(){
        teclas[5].style="width:18%; margin-left:1%;"
        self.captura(teclas[5].id);
     })
     
     teclas[5].addEventListener("mouseout",function(){
         teclas[5].style="width:22%; margin-left:0%;"
     })

     teclas[5].addEventListener("mouseup",function(){
         teclas[5].style="width:22%; margin-left:0%;"
     })     
     
    teclas[6].addEventListener("mousedown",function(){
        teclas[6].style="width:19%; margin-left:0%;"
        self.captura(teclas[6].id);
     })
     
     teclas[6].addEventListener("mouseout",function(){
         teclas[6].style="width:22%; margin-left:0%;"
     })

     teclas[6].addEventListener("mouseup",function(){
         teclas[6].style="width:22%; margin-left:0%;"
     })
     
     
    teclas[7].addEventListener("mousedown",function(){
        teclas[7].style="width:18%; margin-right:1%;"
        self.captura(teclas[7].id);
     })
     
     teclas[7].addEventListener("mouseout",function(){
         teclas[7].style="width:22%; margin-left:0%;"
     })
     
     teclas[7].addEventListener("mouseup",function(){
         teclas[7].style="width:22%; margin-left:0%;"
     })
     
     
     
    teclas[8].addEventListener("mousedown",function(){
        teclas[8].style="width:18%; margin-left:2%;"
        self.captura(teclas[8].id);
     })
     
     teclas[8].addEventListener("mouseout",function(){
         teclas[8].style="width:22%; margin-left:0%;"
     })
     
     teclas[8].addEventListener("mouseup",function(){
         teclas[8].style="width:22%; margin-left:0%;"
     })
          
    teclas[9].addEventListener("mousedown",function(){
        teclas[9].style="width:18%; margin-left:1%;"
        self.captura(teclas[9].id);
     })
     
     teclas[9].addEventListener("mouseout",function(){
         teclas[9].style="width:22%; margin-left:0%;"
     })
     
     teclas[9].addEventListener("mouseup",function(){
         teclas[9].style="width:22%; margin-left:0%;"
     })
     
    teclas[10].addEventListener("mousedown",function(){
        teclas[10].style="width:19%; margin-left:0%;"
        self.captura(teclas[10].id);
     })
     
     teclas[10].addEventListener("mouseout",function(){
         teclas[10].style="width:22%; margin-left:0%;"
     })
     
     teclas[10].addEventListener("mouseup",function(){
         teclas[10].style="width:22%; margin-left:0%;"
     })
     
    teclas[11].addEventListener("mousedown",function(){
        teclas[11].style="width:18%; margin-right:1%;"
        self.captura(teclas[11].id);
     })
     
     teclas[11].addEventListener("mouseout",function(){
         teclas[11].style="width:22%; margin-left:0%;"
     })
     
     teclas[11].addEventListener("mouseup",function(){
         teclas[11].style="width:22%; margin-left:0%;"
     })
     
    teclas[12].addEventListener("mousedown",function(){
        teclas[12].style="width:22%; margin-left:4%;"
        self.captura(teclas[12].id);
     })
     
     teclas[12].addEventListener("mouseout",function(){
         teclas[12].style="width:28%; margin-left:0%;"
     })
     
     teclas[12].addEventListener("mouseup",function(){
         teclas[12].style="width:28%; margin-left:0%;"
     })
     
    teclas[13].addEventListener("mousedown",function(){
        teclas[13].style="width:24%; margin-left:0%;"
        self.captura(teclas[13].id);
     })
     
     teclas[13].addEventListener("mouseout",function(){
         teclas[13].style="width:28%; margin-right:1%;"
     })
     
     teclas[13].addEventListener("mouseup",function(){
         teclas[13].style="width:28%; margin-right:1%;"
     })
     
    teclas[14].addEventListener("mousedown",function(){
        teclas[14].style="width:25%; margin-right:3%;"
        self.captura(teclas[14].id);
     })
     
     teclas[14].addEventListener("mouseout",function(){
         teclas[14].style="width:29%; margin-left:0%;"
     })
        
     teclas[14].addEventListener("mouseup",function(){
         teclas[14].style="width:29%; margin-left:0%;"
     })
     
    teclas[15].addEventListener("mousedown",function(){
        teclas[15].style="width:24%; margin-left:3%;"
        self.captura(teclas[15].id);
     })
     
     teclas[15].addEventListener("mouseout",function(){
         teclas[15].style="width:28%; margin-left:0%;"
     })
     
    teclas[15].addEventListener("mouseup",function(){
         teclas[15].style="width:28%; margin-left:0%;"
     })
     
    teclas[16].addEventListener("mousedown",function(){
        teclas[16].style="width:24%; margin-left:0%;"
        self.captura(teclas[16].id);
     })
     
     teclas[16].addEventListener("mouseout",function(){
         teclas[16].style="width:28%; margin-left:0%;"
     })
     
     teclas[16].addEventListener("mouseup",function(){
         teclas[16].style="width:28%; margin-left:0%;"
     })
     
    teclas[17].addEventListener("mousedown",function(){
        teclas[17].style="width:24%; margin-right:3%;"
        self.captura(teclas[17].id);
     })
     
     teclas[17].addEventListener("mouseout",function(){
         teclas[17].style="width:29%; margin-left:0%;"
     })
     
     teclas[17].addEventListener("mouseup",function(){
         teclas[17].style="width:29%; margin-left:0%;"
     })

     teclas[18].addEventListener("mousedown",function(){
        teclas[18].style="width:65px; margin-left:20px; margin-top:-8px;"
        self.captura(teclas[18].id);
     })
     
     teclas[18].addEventListener("mouseout",function(){
         teclas[18].style="width:79px; margin-left:16px;"
     })
     
     teclas[18].addEventListener("mouseup",function(){
         teclas[18].style="width:79px; margin-left:16px;"
     })

      
    },
    
    captura: function(capturaTecla){        
        var d= document.getElementById("display")
        var numero=d.innerHTML
        var numerito=Number(numero)
        var self=this
        
        if(document.getElementById("display").style.display=="none"){
            document.getElementById("display").style="display:block;"
            d.innerHTML=""
        }

        if(numero.length<=7){
            if(Number(capturaTecla) || Number(capturaTecla)==0 ){
                if(numero.charAt(0)==0){
                    if(numero.charAt(1)=="."){
                        d.innerHTML+=capturaTecla
                    }else{
                        numero.substr(1);
                        d.innerHTML=capturaTecla 
                    }          
                }else{
                        d.innerHTML+=capturaTecla
                }
            }                              
        }
        
        switch(capturaTecla){
                case "on":
                    d.innerHTML=0
                    z=0
                    break;
                case "punto":
                    var validarPunto=false
                    
                    for(var i=0; i<7 ;i++){
                        if(numero.charAt(i)=="."){
                            validarPunto=true
                        }
                    }
                    if(validarPunto){
                        d.innerHTML+=""
                    }else if(numero.length<7){
                        d.innerHTML+="."        
                    }
                    break;
                case "sign":
                    self.operaciones(capturaTecla,numerito)
                    break;
                case "dividido":
                    self.operaciones(capturaTecla,numerito)
                    break;
                case "por":
                    self.operaciones(capturaTecla,numerito)
                    break;
                case "menos":
                    self.operaciones(capturaTecla,numerito)
                    break;
                case "mas":
                    self.operaciones(capturaTecla,numerito)
                    break;
                case "igual":
                    self.operaciones(capturaTecla,numerito)
                    break;
                case "raiz":
                    self.operaciones(capturaTecla,numerito)    
                    break;
        }    
    },
    
    operaciones: function(ope,numerito){
        var self = this
        var operacion=String(ope)       
        var num=numerito    
        
        switch(operacion){
            case "sign":
                z=num*-1
                this.render(z)
                break;
            case "dividido":
                document.getElementById("display").style="display:none;"
                if(simbolo=="/"){
                    z=z/Number(document.getElementById("display").innerHTML)
                }else{
                    simbolo="/"
                    z=num   
                }  
                break;
            case "por":
                document.getElementById("display").style="display:none;"
                if(simbolo=="*"){
                    z=z*Number(document.getElementById("display").innerHTML)
                }else{
                    simbolo="*"
                    z=num   
                }  
                break;
            case "menos":
                document.getElementById("display").style="display:none;"
                if(simbolo=="-"){
                    z=z-Number(document.getElementById("display").innerHTML)
                }else{
                    simbolo="-"
                    z=num   
                }

                break;
            case "mas":
                document.getElementById("display").style="display:none;"
                if(simbolo=="+"){
                    z=z+Number(document.getElementById("display").innerHTML)
                }else{
                    simbolo="+"
                    z=num   
                }    
                break;
            case "raiz":
                z=Math.sqrt(num)  
                this.render(z)
                break;
            case "igual":
                if(simbolo=="/"){
                    z=z/Number(document.getElementById("display").innerHTML)
                    simbolo="=/"
                    y=Number(document.getElementById("display").innerHTML)
                }
                else if(simbolo=="*"){
                    z=z*Number(document.getElementById("display").innerHTML)
                    simbolo="=*"
                    y=Number(document.getElementById("display").innerHTML)
                }
                else if(simbolo=="-"){
                    z=z-Number(document.getElementById("display").innerHTML)
                    simbolo="=-"
                    y=Number(document.getElementById("display").innerHTML)
                }
                else if(simbolo=="+"){
                    z=z+Number(document.getElementById("display").innerHTML)
                    simbolo="=+"
                    y=Number(document.getElementById("display").innerHTML)
                }else if(simbolo=="=+"){
                    z=z+y
                }else if(simbolo=="=-"){
                    z=z-y
                }else if(simbolo=="=*"){
                    z=z*y
                }else if(simbolo=="=/"){
                    z=z/y
                }else{
                    this.render(z)
                }
                
                this.render(z)
                break;
        }    
    }, 
    render: function(resultado){
        resultado=String(z).substr(resultado.length,8);
        if(resultado.length>=8){
            document.getElementById("display").innerHTML=resultado+"+"        
        }else{
            document.getElementById("display").innerHTML=z        
        }
        
    }
}

Calculadora.init()

