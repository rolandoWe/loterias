
let tiempos_hoy1=document.querySelector('.tiempos_hoy1')
let tiempos_hoy4=document.querySelector('.tiempos_hoy4')
let tiempos_hoy7=document.querySelector('.tiempos_hoy7')
let tiempos_sorteo=document.querySelector('.tiempos_sorteo')
let tiempoBody=document.querySelector('.tiempoBody')
let chancesBody=document.querySelector('.chancesBody')
let ul_lotto=document.querySelector('.ul_lotto')
let res_lotto_hoy=document.querySelector('.res_lotto_hoy')
let res_chances_hoy=document.querySelector('.res_chances_hoy')
let res_loteria_hoy=document.querySelector('.res_loteria_hoy')
let res_monazos_hoy=document.querySelector('.res_monazos_hoy')
let fecha_cha=document.querySelector('.fecha_ch')
let l1;
let l2;
let l3;
let ls1=null;
let ls2=null;
let ls3=null;
let man="?";
let m_tar="?";
let tar="?"
let mas=null

function tiemposHoy(){
    fetch('https://integration.jps.go.cr/api/App/nuevostiempos/last').then(dato=>{
        dato.json().then(respuesta=>{
         
            document.querySelector('.fecha_tiemp').innerHTML="Fecha: "+respuesta.dia.substring(0,respuesta.dia.length-9)
            // console.log(respuesta)
            if(respuesta.manana===null){
            tiempos_hoy1.innerHTML="";
            }
            else if(respuesta.manana.in_reventado===0){
                tiempos_hoy1.innerHTML="<b>"+respuesta.manana.numero+"</b>"+' <i class="fa-solid fa-circle" style="color:white"></i>';
                // tiempos_sorteo.innerHTML=respuesta.manana.numeroSorteo;
            }
            else if(respuesta.manana.in_reventado===1){
                tiempos_hoy1.innerHTML="<b>"+respuesta.manana.numero+"</b>"+' <i class="fa-solid fa-circle" style="color:red"></i>';
            }
            else if(respuesta.manana.in_reventado===3){
                tiempos_hoy1.innerHTML="<b>"+respuesta.manana.numero+"</b>"+' <i class="fa-solid fa-circle" style="color:green"></i>';
            }
            
            if(respuesta.mediaTarde===null){
            tiempos_hoy4.innerHTML="?";
            }
            else if(respuesta.mediaTarde.in_reventado===0){
                tiempos_hoy4.innerHTML="<b>"+respuesta.mediaTarde.numero+"</b>"+' <i class="fa-solid fa-circle" style="color:white"></i>';
                // tiempos_sorteo.innerHTML=respuesta.mediaTarde.numeroSorteo;
            }
            else if(respuesta.mediaTarde.in_reventado===1){
                tiempos_hoy4.innerHTML="<b>"+respuesta.mediaTarde.numero+"</b>"+' <i class="fa-solid fa-circle" style="color:red"></i>';
            }
            else if(respuesta.mediaTarde.in_reventado===3){
                tiempos_hoy4.innerHTML="<b>"+respuesta.mediaTarde.numero+"</b>"+' <i class="fa-solid fa-circle" style="color:green"></i>';
            }

            if(respuesta.tarde===null){
            tiempos_hoy7.innerHTML="?";
            }
            else if(respuesta.tarde.in_reventado===0){
                tiempos_hoy7.innerHTML="<b>"+respuesta.tarde.numero+"</b>"+' <i class="fa-solid fa-circle" style="color:white"></i>';
                // tiempos_sorteo.innerHTML=respuesta.tarde.numeroSorteo;
            }
            else if(respuesta.tarde.in_reventado===1){
                tiempos_hoy7.innerHTML="<b>"+respuesta.tarde.numero+"</b>"+' <i class="fa-solid fa-circle" style="color:red"></i>';
            }
            else if(respuesta.tarde.in_reventado===3){
                tiempos_hoy7.innerHTML="<b>"+respuesta.tarde.numero+"</b>"+' <i class="fa-solid fa-circle" style="color:green"></i>';
            }
        })
    })
}
function todosTiempos(){
    fetch('https://integration.jps.go.cr/api/App/nuevostiempos/page').then(dato=>{
      dato.json().then(respuesta=>{
            for(let i of respuesta){
                if(i!=null){
                    // console.log(i)

                    verReventado(i)
                    let= formatFecha=i.dia;
                    formatFecha=formatFecha.substring(0,formatFecha.length-9)

                    tiempoBody.innerHTML+=`
                    <tr class="tr">
                        <th scope="row">${formatFecha}</th>
                        <td><span class="numero numero1">${man}</span></td>
                        <td><span class="numero numero4">${m_tar}</span></td>
                        <td><span class="numero numero7">${tar}</span></td>
                    </tr>`;
                }
        }

      })
    })
}
function verReventado(m){
    if(m.manana!=null){
        if(m.manana.numero<10&&m.manana.in_reventado===0){
            m.manana.numero="0"+m.manana.numero+' <i class="fa-solid fa-circle" style="color:white"></i>'
        }
        else if(m.manana.numero<10&&m.manana.in_reventado===1){
            m.manana.numero="0"+m.manana.numero+' <i class="fa-solid fa-circle" style="color:red"></i>'
        }
        else if(m.manana.numero>=10&&m.manana.in_reventado===0){
            m.manana.numero=m.manana.numero+' <i class="fa-solid fa-circle" style="color:white"></i>'
        }
        else if(m.manana.numero>=10&&m.manana.in_reventado===1){
            m.manana.numero=m.manana.numero+' <i class="fa-solid fa-circle" style="color:red"></i>'
        }
        else if(m.manana.numero>=10&&m.manana.in_reventado===3){
            m.manana.numero=m.manana.numero+' <i class="fa-solid fa-circle" style="color:green"></i>'
        }
        else if(m.manana.numero<10&&m.manana.in_reventado===3){
            m.manana.numero="0"+m.manana.numero+' <i class="fa-solid fa-circle" style="color:green"></i>'
        }
       man= m.manana.numero

     }

    if(m.mediaTarde!=null){
        if(m.mediaTarde.numero<10&&m.mediaTarde.in_reventado===0){
            m.mediaTarde.numero="0"+m.mediaTarde.numero+' <i class="fa-solid fa-circle" style="color:white"></i>'
        }
        else if(m.mediaTarde.numero<10&&m.mediaTarde.in_reventado===1){
            m.mediaTarde.numero="0"+m.mediaTarde.numero+' <i class="fa-solid fa-circle" style="color:red"></i>'
        }
        else if(m.mediaTarde.numero>=10&&m.mediaTarde.in_reventado===0){
            m.mediaTarde.numero=m.mediaTarde.numero+' <i class="fa-solid fa-circle" style="color:white"></i>'
        }
        else if(m.mediaTarde.numero>=10&&m.mediaTarde.in_reventado===1){
            m.mediaTarde.numero=m.mediaTarde.numero+' <i class="fa-solid fa-circle" style="color:red"></i>'
        }
        else if(m.mediaTarde.numero>=10&&m.mediaTarde.in_reventado===3){
            m.mediaTarde.numero=m.mediaTarde.numero+' <i class="fa-solid fa-circle" style="color:green"></i>'
        }
        else if(m.mediaTarde.numero<10&&m.mediaTarde.in_reventado===3){
            m.mediaTarde.numero="0"+m.mediaTarde.numero+' <i class="fa-solid fa-circle" style="color:green"></i>'
        }
       m_tar= m.mediaTarde.numero

     }

    if(m.tarde!=null){
        if(m.tarde.numero<10&&m.tarde.in_reventado===0){
            m.tarde.numero="0"+m.tarde.numero+' <i class="fa-solid fa-circle" style="color:white"></i>'
        }
        else if(m.tarde.numero<10&&m.tarde.in_reventado===1){
            m.tarde.numero="0"+m.tarde.numero+' <i class="fa-solid fa-circle" style="color:red"></i>'
        }
        else if(m.tarde.numero>=10&&m.tarde.in_reventado===0){
            m.tarde.numero=m.tarde.numero+' <i class="fa-solid fa-circle" style="color:white"></i>'
        }
        else if(m.tarde.numero>=10&&m.tarde.in_reventado===1){
            m.tarde.numero=m.tarde.numero+' <i class="fa-solid fa-circle" style="color:red"></i>'
        }
        else if(m.tarde.numero>=10&&m.tarde.in_reventado===3){
            m.tarde.numero=m.tarde.numero+' <i class="fa-solid fa-circle" style="color:green"></i>'
        }
        else if(m.tarde.numero<10&&m.tarde.in_reventado===3){
            m.tarde.numero="0"+m.tarde.numero+' <i class="fa-solid fa-circle" style="color:green"></i>'
        }
       tar= m.tarde.numero

     }

}
function todosChances(){
    fetch('https://integration.jps.go.cr/api/App/chances/page').then(dato=>{
        dato.json().then(respuesta=>{
            // console.log(respuesta)
            for(let i of respuesta){
                // console.log(i.premios[0])
             let p1=i.premios[0].numero;
             let s1=i.premios[0].serie;
             let p2=i.premios[1].numero;
             let s2=i.premios[1].serie;
             let p3=i.premios[2].numero;
             let s3=i.premios[2].serie;
            //  console.log(i.fecha.length)

             
            chancesBody.innerHTML+=`                         <tr class="tr">
            <th class="row_ch"><span class="fecha_ch">${i.fecha}</span></th>
            <td><span class="numero numero1">Nro:<b>${p1}</b> Srie:<b>${s1}</b></span></td>
            <td><span class="numero numero4">Nro:<b>${p2}</b> Srie:<b>${s2}</b></span></td>
            <td><span class="numero numero7">Nro:<b>${p3}</b> Srie:<b>${s3}</b></span></td>
          </tr>`;

            }

        })
    })
}
function lotoTodas(){
    fetch('https://integration.jps.go.cr/api/App/lotto/page').then(dato=>{
        dato.json().then(resp=>{
            // console.log(resp)
            for(let l of resp){
                // console.log(l)
                // console.log(l.numeros)
                let format_fecha=l.fecha;
                    format_fecha=format_fecha.substring(0,format_fecha.length-9)

                ul_lotto.innerHTML+=`                       
             <li>
                <span class="n_f n_fecha">${format_fecha} </span>
                <span class="n_f n_fecha">numeros: </span><br>
                <span class="n n_1"><b>${l.numeros[0]}</b></span>
                <span class="n n_2"><b>${l.numeros[1]}</b></span>
                <span class="n n_3"><b>${l.numeros[2]}</b></span>
                <span class="n n_4"><b>${l.numeros[3]}</b></span>
                <span class="n n_5"><b>${l.numeros[4]}</b></span>
              </li>
             <li>
                <span class="n_f n_fecha">${l.fecha} </span>
                <span class="n_f n_fecha">numeros revancha: </span><br>
                <span class="n n_1"><b>${l.numerosRevancha[0]}</b></span>
                <span class="n n_2"><b>${l.numerosRevancha[1]}</b></span>
                <span class="n n_3"><b>${l.numerosRevancha[2]}</b></span>
                <span class="n n_4"><b>${l.numerosRevancha[3]}</b></span>
                <span class="n n_5"><b>${l.numerosRevancha[4]}</b></span>
              </li>`
            }
        })
    })
}
function lotoHoy(){
    fetch('https://integration.jps.go.cr/api/App/lotto/last').then(dato=>{
        dato.json().then(result=>{
            // console.log(result)
           let resultas=result.fecha.substring(0,result.fecha.length-9)
            //   resultas=resultas.split("").join("")
        //    console.log(resultas)
         res_lotto_hoy.innerHTML+=`
         <li>
         <span class="lotto_hoy_f">Fecha: ${resultas}<br> <b>Numeros</b>: </span><br>
         <span class="lotto_hoy n">${result.numeros[0]}</span>
         <span class="lotto_hoy n">${result.numeros[1]}</span>
         <span class="lotto_hoy n">${result.numeros[2]}</span>
         <span class="lotto_hoy n">${result.numeros[3]}</span>
         <span class="lotto_hoy n">${result.numeros[4]}</span>
         </li>
         <li>
         <span class="lotto_hoy_f"> <b>Revancha</b>: </span><br>
        <span class="lotto_hoy n">${result.numerosRevancha[0]}</span>
        <span class="lotto_hoy n">${result.numerosRevancha[1]}</span>
        <span class="lotto_hoy n">${result.numerosRevancha[2]}</span>
        <span class="lotto_hoy n">${result.numerosRevancha[3]}</span>
        <span class="lotto_hoy n">${result.numerosRevancha[4]}</span>
        </li>`
        })
    })
}
function chancesHoy(){
    fetch('https://integration.jps.go.cr/api/App/chances/last').then(dato=>{
        dato.json().then(res=>{
            // console.log(res)
            let mont1=res.premios[0].monto
               mont1=mont1.toLocaleString("en-US")

            let mont2=res.premios[1].monto
               mont2=mont2.toLocaleString("en-US")

            let mont3=res.premios[2].monto
               mont3=mont3.toLocaleString("en-US")

            let mont4=res.premios[3].monto
               mont4=mont4.toLocaleString("en-US")

            let fecha=res.fecha;
            // console.log(fecha)
                fecha=fecha.substring(0,fecha.length-9)
            // console.log(fecha)
            let serie1=null
            let serie2=null
            let serie3=null
            let serie4=null
            if(res.premios[0].serie<100){
                serie1='0'+res.premios[0].serie
            }else{
                serie1=res.premios[0].serie
            }
            if(res.premios[1].serie<100){
                serie2='0'+res.premios[1].serie
            }else{
                serie2=res.premios[1].serie
            }
            if(res.premios[2].serie<100){
                serie3='0'+res.premios[2].serie
            }else{
                serie3=res.premios[2].serie
            }
            if(res.premios[3].serie<100){
                serie4='0'+res.premios[3].serie
            }else{
                serie4=res.premios[3].serie
            }

            fecha_cha.innerHTML=res.fecha
            res_chances_hoy.innerHTML=` 
            <h2>Ultimos resultados de los Chances</h2>
            <span class="fecha_ch">Fecha: ${fecha}</span>             
            <li>
            <span class="lotto_hoy"><b>1°:</b> <span class="n">${res.premios[0].numero} </span> &nbsp; &nbsp;<b>serie:</b> <span class="n">${serie1}</span>&nbsp;<b> premio:</b> <span>${mont1}</span></span>
           </li>
            <li>
            <span class="lotto_hoy"><b>2°:</b> <span class="n">${res.premios[1].numero} </span> &nbsp; &nbsp;<b>serie:</b> <span class="n">${serie2}</span>&nbsp;<b> premio:</b> <span>${mont2}</span></span>
           </li>
            <li>
            <span class="lotto_hoy"><b>3°:</b> <span class="n">${res.premios[2].numero} </span> &nbsp; &nbsp;<b>serie:</b> <span class="n">${serie3}</span>&nbsp;<b> premio:</b> <span>${mont3}</span></span>
           </li>
            <li>
            <span class="lotto_hoy"><b>4°:</b> <span class="n">${res.premios[3].numero} </span> &nbsp; &nbsp;<b>serie:</b> <span class="n">${serie4}</span>&nbsp;<b> premio:</b> <span>${mont4}</span></span>
           </li>
           `
        })
    })
}
function monazosHoy(){
    fetch('https://integration.jps.go.cr/api/App/tresmonazos/last').then(dato=>{
        dato.json().then(resp=>{
// console.log(resp)
        let form_fech=resp.dia;
            form_fech=form_fech.substring(0,form_fech.length-9)
            // console.log(resp)

            if(resp.manana!=null){
         res_monazos_hoy.innerHTML=` 
         <h2>Ultimos resultados de los 3 Monázos</h2>
         <span class="fecha_m">Fecha: ${form_fech}</span>
         <li>
            <span class="lotto_hoy"><b>Dia:</b> 
            <span class="n">${resp.manana.numeros[0]}</span>
            <span class="n">${resp.manana.numeros[1]}</span>
            <span class="n">${resp.manana.numeros[2]}</span>
            </span>
         </li>`
            }
            if(resp.mediaTarde!=null){
         res_monazos_hoy.innerHTML=` 
         <h2>Ultimos resultados de los 3 Monázos</h2>
         <span class="fecha_m">Fecha: ${form_fech}</span>
         <li>
            <span class="lotto_hoy"><b>Dia:</b> 
            <span class="n">${resp.manana.numeros[0]}</span>
            <span class="n">${resp.manana.numeros[1]}</span>
            <span class="n">${resp.manana.numeros[2]}</span>
            </span>
         </li>
         <li>
            <span class="lotto_hoy"><b>Tarde:</b> 
            <span class="n">${resp.mediaTarde.numeros[0]}</span>
            <span class="n">${resp.mediaTarde.numeros[1]}</span>
            <span class="n">${resp.mediaTarde.numeros[2]}</span>
            </span>
         </li>
         `
            }
            if(resp.tarde!=null){
         res_monazos_hoy.innerHTML=` 
         <h2>Ultimos resultados de los 3 Monázos</h2>
         <span class="fecha_m">Fecha: ${form_fech}</span>
         <li>
            <span class="lotto_hoy"><b>Dia:</b> 
            <span class="n">${resp.manana.numeros[0]}</span>
            <span class="n">${resp.manana.numeros[1]}</span>
            <span class="n">${resp.manana.numeros[2]}</span>
            </span>
         </li>
         <li>
            <span class="lotto_hoy"><b>Tarde:</b> 
            <span class="n">${resp.mediaTarde.numeros[0]}</span>
            <span class="n">${resp.mediaTarde.numeros[1]}</span>
            <span class="n">${resp.mediaTarde.numeros[2]}</span>
            </span>
         </li>
         <li>
            <span class="lotto_hoy"><b>Noche:</b> 
            <span class="n">${resp.tarde.numeros[0]}</span>
            <span class="n">${resp.tarde.numeros[1]}</span>
            <span class="n">${resp.tarde.numeros[2]}</span>
            </span>
         </li>
         `
            }
        })
    })
}
function loteriaHoy(){
    fetch('https://integration.jps.go.cr/api/App/loterianacional/last').then(dato=>{
        dato.json().then(resp=>{
            console.log(resp)
            console.log(resp.premios)
            let fecha=resp.fecha;
                fecha=fecha.substring(0,fecha.length-9)
            for(let l of resp.premios){
                if(l.tipo===1){
                    // console.log(l.numero)
                    if(l.serie<100){
                        ls1="0"+l.serie
                    }else{
                        ls1=l.serie
                    }
                 l1="<b>1° :</b>"+
                 ` <span class="n">${l.numero}</span>`+"&nbsp; &nbsp;"+
                 ` <b>serie: </b>`+
                 ` <span class="n">${ls1}</span>`+"&nbsp; &nbsp;"+
                 ` <b>Premio: </b>`+
                 ` <span class="monto_loteria">${l.monto.toLocaleString('en-US')}</span>`
                }
                if(l.tipo===2){
                    console.log(l.numero)
                    console.log(l.serie)
                    if(l.serie<100){
                        ls2="0"+l.serie
                    }else{
                        ls2=l.serie
                    }

                     l2="<b>2° :</b>"+
                     ` <span class="n">${l.numero}</span>`+"&nbsp; &nbsp;"+
                     ` <b>serie: </b>`+
                     ` <span class="n">${ls2}</span>`+"&nbsp; &nbsp;"+
                     ` <b>Premio: </b>`+
                     ` <span class="monto_loteria">${l.monto.toLocaleString('en-US')}</span>`
                }
                if(l.tipo===3){
                    console.log(l.numero)
                    if(l.serie<100){
                        ls3="0"+l.serie
                    }else{
                        ls3=l.serie
                    }
                     l3="<b>3° :</b>"+
                     ` <span class="n">${l.numero}</span>`+"&nbsp; &nbsp;"+
                 ` <b>serie: </b>`+
                 ` <span class="n">${ls3}</span>`+"&nbsp; &nbsp;"+
                 ` <b>Premio: </b>`+
                 ` <span class="monto_loteria">${l.monto.toLocaleString('en-US')}</span>`
                }
            res_loteria_hoy.innerHTML=`<h2>Ultimos resultados de la Loteria Nacional</h2>
            <span class="fecha_m">Fecha: ${fecha}</span>
             <li>
               <span class="lotto_hoy">${l1}</span>
            </li>
             <li>
               <span class="lotto_hoy">${l2}</span>
            </li>
             <li>
               <span class="lotto_hoy">${l3}</span>
            </li>
            `

            }
        })
    })
}
tiemposHoy()
todosTiempos()
todosChances()
lotoTodas()
lotoHoy()
chancesHoy()
monazosHoy()
loteriaHoy()