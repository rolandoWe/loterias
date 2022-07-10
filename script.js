
let tiempos_hoy1=document.querySelector('.tiempos_hoy1')
let tiempos_hoy4=document.querySelector('.tiempos_hoy4')
let tiempos_hoy7=document.querySelector('.tiempos_hoy7')
let tiempos_sorteo=document.querySelector('.tiempos_sorteo')
let tiempoBody=document.querySelector('.tiempoBody')
let chancesBody=document.querySelector('.chancesBody')
let man="?";
let m_tar="?";
let tar="?"

function tiemposHoy(){
    fetch('https://integration.jps.go.cr/api/App/nuevostiempos/last').then(dato=>{
        dato.json().then(respuesta=>{
            // console.log(respuesta)
            if(respuesta.manana===null){
            tiempos_hoy1.innerHTML="";
            }
            else if(respuesta.manana.in_reventado===0){
                tiempos_hoy1.innerHTML=respuesta.manana.numero+' <i class="fa-solid fa-circle" style="color:white"></i>';
                tiempos_sorteo.innerHTML=respuesta.manana.numeroSorteo;
            }else if(respuesta.manana.in_reventado===1){
                tiempos_hoy1.innerHTML=respuesta.manana.numero+' <i class="fa-solid fa-circle" style="color:red"></i>';
            }
            
            if(respuesta.mediaTarde===null){
            tiempos_hoy4.innerHTML="?";
            }
            else if(respuesta.mediaTarde.in_reventado===0){
                tiempos_hoy4.innerHTML=respuesta.mediaTarde.numero+' <i class="fa-solid fa-circle" style="color:white"></i>';
                tiempos_sorteo.innerHTML=respuesta.mediaTarde.numeroSorteo;
            }else if(respuesta.mediaTarde.in_reventado===1){
                tiempos_hoy4.innerHTML=respuesta.mediaTarde.numero+' <i class="fa-solid fa-circle" style="color:red"></i>';
            }

            if(respuesta.tarde===null){
            tiempos_hoy7.innerHTML="?";
            }
            else if(respuesta.tarde.in_reventado===0){
                tiempos_hoy7.innerHTML=respuesta.tarde.numero+' <i class="fa-solid fa-circle" style="color:white"></i>';
                tiempos_sorteo.innerHTML=respuesta.tarde.numeroSorteo;
            }else if(respuesta.tarde.in_reventado===1){
                tiempos_hoy7.innerHTML=respuesta.tarde.numero+' <i class="fa-solid fa-circle" style="color:red"></i>';
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

                    tiempoBody.innerHTML+=`
                    <tr class="tr">
                        <th scope="row">${i.dia}</th>
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
             console.log(i.fecha.length)

             
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
tiemposHoy()
todosTiempos()
todosChances()