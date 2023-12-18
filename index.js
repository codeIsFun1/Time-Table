let h1=document.createElement("h1");
        h1.innerHTML=`College Time Table`;
        h1.style.textTransform="uppercase";
        h1.style.color="red";
        h1.style.textAlign="center";
        let table=document.createElement("table");
        let r1=document.createElement("tr");
        let r2=document.createElement("tr");
        let r3=document.createElement("tr");
        let r4=document.createElement("tr");
        let r5=document.createElement("tr");
        let r6=document.createElement("tr");
        let r7=document.createElement("tr");

        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        let td5=document.createElement("td");
        let td6=document.createElement("td");
        let td7=document.createElement("td");
        let td8=document.createElement("td");
        let td9=document.createElement("td");

        td2.innerHTML=`8:30-9:30`;
        td3.innerHTML=`9:30-10:30`;
        td4.innerHTML=`10:30-11:30`;
        td5.innerHTML=`11:30-12:30`;
        td6.innerHTML=`12:30-2:00`;
        td7.innerHTML=`2:00-3:00`;
        td8.innerHTML=`3:00-4:00`;
        td9.innerHTML=`4:30-5:30`;
        

        r1.appendChild(td1);
        r1.appendChild(td2);
        r1.appendChild(td3);
        r1.appendChild(td4);
        r1.appendChild(td5);
        r1.appendChild(td6);
        r1.appendChild(td7);
        r1.appendChild(td8);
        r1.appendChild(td9);

        let td11=document.createElement("td");
        let td12=document.createElement("td");
        let td13=document.createElement("td");
        let td14=document.createElement("td");
        let td15=document.createElement("td");
        let td16=document.createElement("td");
        let td17=document.createElement("td");
        let td18=document.createElement("td");
        let td19=document.createElement("td");

        td11.innerHTML=`Monday`;
        td12.innerHTML=`---`;
        td13.innerHTML=`SUB1`;
        td13.style.color="blue";
        td14.innerHTML=`SUB2`;
        td14.style.color="orange";
        td15.innerHTML=`SUB3`;
        td15.style.color="violet";
        td16.innerHTML=`
        <h5 style="text-align:center">L</h5>
        <h5 style="text-align:center">U</h5>
        <h5 style="text-align:center">N</h5>
        <h5 style="text-align:center">C</h5>
        <h5 style="text-align:center">H</h5>
        `;
        td16.rowSpan="7"
        td17.innerHTML=`SUB4`;
        td17.style.color="green";
        td18.innerHTML=`SUB5`;
        td18.style.color="red";
        td19.innerHTML="COUNSELLING CLASS";
        td19.style.fontWeight="bolder";
        r2.appendChild(td11);
        r2.appendChild(td12);
        r2.appendChild(td13);
        r2.appendChild(td14);
        r2.appendChild(td15);
        r2.appendChild(td16);
        r2.appendChild(td17);
        r2.appendChild(td18);
        r2.appendChild(td19);


        let td21=document.createElement("td");
        let td22=document.createElement("td");
        let td23=document.createElement("td");
        let td24=document.createElement("td");
        let td25=document.createElement("td");
        
        let td27=document.createElement("td");
        let td28=document.createElement("td");
        let td29=document.createElement("td");

        td21.innerHTML=`TUESDAY`;
        td22.innerHTML=`SUB1`;
        td22.style.color="blue";
        td23.innerHTML=`SUB2`;
        td23.style.color="orangered";
        td24.innerHTML=`SUB3`;
        td24.style.color="violet";
        td25.innerHTML=`---`;
        td27.innerHTML=`SUB5`;
        td27.style.color="brown";
        td28.innerHTML=`SUB6`;
        td28.style.color="brown";
        td29.innerHTML="LIBRARY";
        r3.appendChild(td21);
        r3.appendChild(td22);
        r3.appendChild(td23);
        r3.appendChild(td24);
        r3.appendChild(td25);
        r3.appendChild(td27);
        r3.appendChild(td28);
        r3.appendChild(td29);

        let td31=document.createElement("td");
        let td32=document.createElement("td");
        let td33=document.createElement("td");
        let td34=document.createElement("td");
        let td35=document.createElement("td");
        let td37=document.createElement("td");
        let td38=document.createElement("td");
        let td39=document.createElement("td");

        td31.innerHTML=`WEDNESDAY`;
        td32.innerHTML=`SUB1`;
        td32.style.color="blue";
        td33.innerHTML=`SUB2`;
        td34.innerHTML=`SUB3`;
        td34.style.color="red";
        td35.innerHTML=`---`;
        td39.innerHTML="LAB";
        td39.style.fontWeight="bolder";
        td39.colSpan="3";
        td33.style.color="orangered";
        r4.appendChild(td31);
        r4.appendChild(td32);
        r4.appendChild(td33);
        r4.appendChild(td34);
        r4.appendChild(td35);
        r4.appendChild(td39);

        let td41=document.createElement("td");
        let td42=document.createElement("td");
        let td43=document.createElement("td");
        let td44=document.createElement("td");
        let td45=document.createElement("td");
        let td47=document.createElement("td");
        let td48=document.createElement("td");
        let td49=document.createElement("td");

        td41.innerHTML=`THURSDAY`;
        td42.innerHTML=`SUB1`;
        td42.style.color="blue";
        td43.innerHTML=`SUB2`;
        td43.style.color="orangered";
        td44.innerHTML=`SUB3`;
        td44.style.color="violet";
        td45.innerHTML=`---`;
        td47.innerHTML=`SUB5`;
        td47.style.color="brown";
        td48.innerHTML=`SUB6`;
        td48.style.color="brown";
        td49.innerHTML="LIBRARY";

        r5.appendChild(td41);
        r5.appendChild(td42);
        r5.appendChild(td43);
        r5.appendChild(td44);
        r5.appendChild(td45);
        r5.appendChild(td47);
        r5.appendChild(td48);
        r5.appendChild(td49);

        let td51=document.createElement("td");
        let td52=document.createElement("td");
        let td53=document.createElement("td");
        let td54=document.createElement("td");
        let td55=document.createElement("td");
        let td57=document.createElement("td");
        let td58=document.createElement("td");
        let td59=document.createElement("td");

        td51.innerHTML=`FRIDAY`;
        td52.innerHTML=`SUB1`;
        td52.style.color="blue";
        td53.innerHTML=`SUB2`;
        td53.style.color="orangered";
        td54.innerHTML=`SUB3`;
        td54.style.color="violet";
        td55.innerHTML=`---`;
        td57.innerHTML=`SUB5`;
        td57.style.color="green";
        td58.innerHTML=`SUB6`;
        td58.style.color="red";
        td59.innerHTML="LIBRARY";

        r6.appendChild(td51);
        r6.appendChild(td52);
        r6.appendChild(td53);
        r6.appendChild(td54);
        r6.appendChild(td55);
        r6.appendChild(td57);
        r6.appendChild(td58);
        r6.appendChild(td59);

        let td61=document.createElement("td");
        let td62=document.createElement("td");
        let td63=document.createElement("td");
        let td67=document.createElement("td");
        let td68=document.createElement("td");
        let td69=document.createElement("td");
        td61.innerHTML=`SATURDAY`;
        td62.innerHTML=`SUB1`;
        td62.style.color="blue";
        td63.innerHTML=`SEMINAR`;
        td63.style.fontWeight="bolder";
        td63.colSpan="3";
        td67.innerHTML="SUB2";
        td67.style.color="green";
        td68.innerHTML="SUB3";
        td68.style.color="red";
        td69.innerHTML="LIBRARY";
        r7.appendChild(td61);
        r7.appendChild(td62);
        r7.appendChild(td63);
       
   
        r7.appendChild(td67);
        r7.appendChild(td68);
        r7.appendChild(td69);

        table.appendChild(r1);
        table.appendChild(r2);
        table.appendChild(r3);
        table.appendChild(r4);
        table.appendChild(r5);
        table.appendChild(r6);
        table.appendChild(r7);
        table.border="2"
        table.cellPadding="10"
        table.style.margin="0 auto";
        table.style.textAlign="center";
        table.style.borderCollapse="collapse";
        document.body.append(h1);
        document.body.append(table);
        document.body.style.height="90vh";
        document.body.style.width="100%";
        // document.body.style.display="flex";
        // document.body.style.flexDirection="column";    
        // document.body.style.alignItems="center";   
        // document.body.style.justifyContent="center";
