const permeabilidadVacio = 1.256637*Math.pow(10,-6);
const permitividadDelVacio = 8.8541*Math.pow(10,-12);

///////////////// Bifilar Bajas Frecuencias - BB /////////////////

let inductanciaBB = (permeabilidad, distanciaEntreCables, radioCable) =>{
    let resultado = (permeabilidad / Math.PI)*((1/4) + math.log(distanciaEntreCables / radioCable));
    return resultado;
};

let resistividadBB = (conductividad, radioCable) => {
    let resultado = 2 / (conductividad * Math.PI * (radioCable**2));
    return resultado;
};

let capacitanciaBB = (permitividad, distanciaEntreCables, radioCable) => {
    let resultado = (Math.PI * permitividad) / (math.log(distanciaEntreCables / radioCable));
    return resultado;
};

let conductanciaBB = (conductividad, distanciaEntreCables, radioCable) => {
    let resultado = (Math.PI * conductividad) / (math.log(distanciaEntreCables / radioCable));
    return resultado;
};


function impedanciaBB(){
    
    const BBPermeabilidad = Number(document.getElementById("BBPermeabilidad").value)*permeabilidadVacio;
    const BBDistB = Number(document.getElementById("BBDistB").value);
    const BBRadioA = Number(document.getElementById("BBRadioA").value);
    const BBConductividad1 = Number(document.getElementById("BBConductividad1").value);
    const BBConductividad2 = Number(document.getElementById("BBConductividad2").value);
    const BBFrecuencia = Number(document.getElementById("BBFrecuencia").value);
    const BBPermitividad = Number(document.getElementById("BBPermitividad").value)*permitividadDelVacio;

    let ResultadoBB = document.getElementById("ResultadoBB");
    
    console.log(BBPermeabilidad);
    console.log(BBDistB);
    console.log(BBRadioA);
    console.log(BBConductividad1);
    console.log(BBConductividad2);
    console.log(BBPermitividad);
    let inductanciaResBB = inductanciaBB(BBPermeabilidad, BBDistB, BBRadioA);
    let resistividadResBB = resistividadBB(BBConductividad1, BBRadioA);
    let capacitanciaResBB = capacitanciaBB(BBPermitividad, BBDistB, BBRadioA);
    let conductanciaResBB = conductanciaBB(BBConductividad2, BBDistB, BBRadioA);

    console.log(typeof(BBPermitividad));
    console.log(math.sqrt(4))
    let BBimwL = math.complex(resistividadResBB, inductanciaResBB*BBFrecuencia*2*Math.PI);
    let BBimwC = math.complex(conductanciaResBB, capacitanciaResBB*BBFrecuencia*2*Math.PI);

    let BBresult = math.sqrt(math.divide(BBimwL,BBimwC));
    ResultadoB.innerText = `${(BBresult.re).toFixed(3)} +( ${(BBresult.im).toFixed(3)} ) i` 
}

///////////////// Bifilar Altas frecuencias - BA /////////////////

let inductanciaBA = (permeabilidad, distanciaEntreCables, radioCable) =>{
    let resultado = (permeabilidad / Math.PI)*(math.log(distanciaEntreCables / radioCable));
    return resultado;
};

let resistividadBA = (conductividad, radioCable, profundidadPenetracion) => {
    let resultado = 1 / (conductividad * Math.PI * radioCable * profundidadPenetracion);
    return resultado;
};

let capacitanciaBA = (permitividad, distanciaEntreCables, radioCable) => {
    let resultado = (Math.PI * permitividad) / (math.log(distanciaEntreCables / radioCable));
    return resultado;
};

let conductanciaBA = (conductividad, distanciaEntreCables, radioCable) => {
    let resultado = (Math.PI * conductividad) / (math.log(distanciaEntreCables / radioCable));
    return resultado;
};

function impedanciaBA(){
    const BARadioA = Number(document.getElementById("BARadioA").value);
    const BADistB = Number(document.getElementById("BADistB").value);
    const BAConductividad1 = Number(document.getElementById("BAConductividad1").value);
    const BAConductividad2 = Number(document.getElementById("BAConductividad2").value);
    const BAPermitividad = Number(document.getElementById("BAPermitividad").value)*permitividadDelVacio;
    const BAPermeabilidad = Number(document.getElementById("BAPermeabilidad").value)*permeabilidadVacio;
    const BAProfundidad = Number(document.getElementById("BAProfundidad").value);
    const BAFrecuencia = Number(document.getElementById("BAFrecuencia").value);

    console.log(BAProfundidad);

    let inductanciaResBA = inductanciaBA(BAPermeabilidad, BADistB, BARadioA);
    let resistividadResBA = resistividadBA(BAConductividad1, BARadioA, BAProfundidad);
    let capacitanciaResBA = capacitanciaBA(BAPermitividad, BADistB, BARadioA);
    let conductanciaResBA = conductanciaBA(BAConductividad2, BADistB, BARadioA);
    
    let BAimwL = math.complex(resistividadResBA, inductanciaResBA*BAFrecuencia*2*Math.PI);
    let BAimwC = math.complex(conductanciaResBA, capacitanciaResBA*BAFrecuencia*2*Math.PI);

    let BAresult = math.sqrt(math.divide(BAimwL,BAimwC));
    ResultadoB2.innerText = `${(BAresult.re).toFixed(3)} +( ${(BAresult.im).toFixed(3)} ) i` 
}

///////////////// Cable Coaxial Bajas Frecuencias - CB /////////////////

let inductanciaCB = (permeabilidad, radioCond1, radioCond2, radioDiel) =>{
    let resultado = (permeabilidad / (2*Math.PI))*((math.log(radioDiel/radioCond1)) + (1/4) + ((1/(4*(radioCond2**2 - radioDiel**2)))*((radioDiel**2) - (3*(radioCond2**2)) + ((4*(radioCond2**4))*(math.log(radioCond2/radioDiel))/((radioCond2**2) - (radioDiel**2))))));
    return resultado;
};

let resistividadCB = (conductividadCond1, radioCond1, radioCond2, radioDiel) => {
    let resultado = (1/(conductividadCond1*Math.PI))*((1/radioCond1**2) + (1/((radioCond2**2) - (radioDiel**2))));
    return resultado;
};

let capacitanciaCB = (permitividad, radioDiel, radioCond1) => {
    let resultado = (2*Math.PI * permitividad) / (math.log(radioDiel / radioCond1));
    return resultado;
};

let conductanciaCB = (conductividadDiel, radioDiel, radioCond1) => {
    let resultado = (2*Math.PI * conductividadDiel) / (math.log(radioDiel / radioCond1));
    return resultado;
};


function impedanciaCB(){

    const CBradioCond1 = Number(document.getElementById("CBradioCond1").value);
    const CBradioCond2 = Number(document.getElementById("CBradioCond2").value);
    const CBradioDiele = Number(document.getElementById("CBradioDiele").value);
    const CBConductividadC = Number(document.getElementById("CBConductividadC").value);
    const CBConductividadD = Number(document.getElementById("CBConductividadD").value);
    const CBPermitividad = Number(document.getElementById("CBPermitividad").value)*permitividadDelVacio;
    const CBPermeabilidad = Number(document.getElementById("CBPermeabilidad").value)*permeabilidadVacio;
    const CBFrecuencia = Number(document.getElementById("CBFrecuencia").value);

    console.log(CBradioCond1);
    console.log(CBradioCond2);
    console.log(CBradioDiele);
    console.log(CBConductividadC);
    console.log(CBConductividadD);
    console.log(CBPermitividad);
    console.log(CBPermeabilidad);

    let inductanciaResCB = inductanciaCB(CBPermeabilidad, CBradioCond1, CBradioCond2, CBradioDiele);
    let resistividadResCB = resistividadCB(CBConductividadC, CBradioCond1, CBradioCond2, CBradioDiele);
    let capacitanciaResCB = capacitanciaCB(CBPermitividad, CBradioDiele, CBradioCond1);
    let conductanciaResCB = conductanciaCB(CBConductividadD, CBradioDiele, CBradioCond1);

    console.log("xd");
    console.log(inductanciaResCB);
    console.log(resistividadResCB);
    console.log(capacitanciaResCB);
    console.log(conductanciaResCB);

    let CBimwL = math.complex(resistividadResCB, inductanciaResCB*CBFrecuencia*2*Math.PI);
    let CBimwC = math.complex(conductanciaResCB, capacitanciaResCB*CBFrecuencia*2*Math.PI);

    console.log("xd2");
    console.log(CBimwL);
    console.log(CBimwC);

    let CBresult = math.sqrt(math.divide(CBimwL,CBimwC));
    ResultadoC.innerText = `${(CBresult.re).toFixed(3)} +( ${(CBresult.im).toFixed(3)} ) i` 
}

///////////////// Cable Coaxial Altas Frecuencias - CA /////////////////

  let inductanciaCA = (permeabilidad, radioCond1, radioDiel) =>{
    let resultado = (permeabilidad / (2*Math.PI))*(math.log(radioDiel/radioCond1));
    return resultado;
};

let resistividadCA = (conductividadCond1, radioCond1, radioDiel, profundidadPenetracion) => {
    let resultado = (1/(2 * conductividadCond1 * Math.PI * profundidadPenetracion))*((1/radioCond1) + (1/radioDiel));
    return resultado;
};

let capacitanciaCA = (permitividad, radioDiel, radioCond1) => {
    let resultado = (2 * Math.PI * permitividad) / (math.log(radioDiel / radioCond1));
    return resultado;
};

let conductanciaCA = (conductividadDiel, radioDiel, radioCond1) => {
    let resultado = (2 * Math.PI * conductividadDiel) / (math.log(radioDiel / radioCond1));
    return resultado;
};

function impedanciaCA(){

    const CAradioCond1 = Number(document.getElementById("CAradioCond1").value);
    const CBradioDiele = Number(document.getElementById("CAradioDiele").value);
    const CAConductividadC = Number(document.getElementById("CAConductividadC").value);
    const CAConductividadD = Number(document.getElementById("CAConductividadD").value);
    const CAPermitividad = Number(document.getElementById("CAPermitividad").value)*permitividadDelVacio;
    const CAPermeabilidad = Number(document.getElementById("CAPermeabilidad").value)*permeabilidadVacio;
    const CAProfundidad = Number(document.getElementById("CAProfundidad").value);
    const CAFrecuencia = Number(document.getElementById("CAFrecuencia").value);

    console.log(CAradioCond1);
    console.log(CBradioDiele);
    console.log(CAConductividadC);
    console.log(CAConductividadD);
    console.log(CAPermitividad);
    console.log(CAPermeabilidad);
    console.log(CAFrecuencia);

    let inductanciaResCA = inductanciaCA(CAPermeabilidad, CAradioCond1, CBradioDiele);
    let resistividadResCA = resistividadCA(CAConductividadC, CAradioCond1, CBradioDiele, CAProfundidad);
    let capacitanciaResCA = capacitanciaCA(CAPermitividad, CBradioDiele, CAradioCond1);
    let conductanciaResCA = conductanciaCA(CAConductividadD, CBradioDiele, CAradioCond1);

    console.log("xd");
    console.log(inductanciaResCA);
    console.log(resistividadResCA);
    console.log(capacitanciaResCA);
    console.log(conductanciaResCA);

    let CAimwL = math.complex(resistividadResCA, inductanciaResCA*CAFrecuencia*2*Math.PI);
    let CAimwC = math.complex(conductanciaResCA, capacitanciaResCA*CAFrecuencia*2*Math.PI);

    let CAresult = math.sqrt(math.divide(CAimwL,CAimwC));
    ResultadoC2.innerText = `${(CAresult.re).toFixed(3)} +( ${(CAresult.im).toFixed(3)} ) i` 
}

///////////////// Microcinta - M /////////////////

function impedanciaM(){
    
    const Mweight = Number(document.getElementById("Mweight").value);
    const MDist = Number(document.getElementById("MDist").value);
    const Mpermitividad = Number(document.getElementById("Mpermitividad").value);

    let result;
    if(MDist/Mweight <= 1){
        resultM = (60/math.sqrt(Mpermitividad))(((8*Mweight)/MDist)+(MDist/(4*Mweight)));
    }else{
        resultM = (120*Math.PI)/((math.sqrt(Mpermitividad))*((MDist/Mweight) + 1.393 + (0.667)*(math.log((MDist/Mweight)+(1.444)))));
    }
    ResultadoM.innerText = resultM.toFixed(3);
}

///////////////// Bifilar Dimensiones - Brec /////////////////

function distanciaCables(){
    const BRadioArec = Number(document.getElementById("BRadioArec").value);
    const BPermitividadrec = Number(document.getElementById("BPermitividadrec").value);
    const BCapacitancia = Number(document.getElementById("BCapacitancia").value);
    
    let resultadoBrec =  BRadioArec*(Math.pow(Math.E, (Math.PI*BPermitividadrec*permitividadDelVacio)/BCapacitancia));
    ResultadoBrec.innerText = resultadoBrec.toFixed(3);
}

///////////////// Coaxial Dimensiones - Crec /////////////////

function radiosCD(){
    const CradioCond1rec = Number(document.getElementById("CradioCond1rec").value);
    const CPermitividadrec = Number(document.getElementById("CPermitividadrec").value);
    const CCapacitanciarec = Number(document.getElementById("CCapacitanciarec").value);
    const CRestrec = Number(document.getElementById("CRestrec").value);
    const CConductividadCrec = Number(document.getElementById("CConductividadCrec").value);

    let radioDielectricoCrec = (CradioCond1rec)*(Math.pow(Math.E, (2*Math.PI*CPermitividadrec*permitividadDelVacio)/CCapacitanciarec));
    let radioExternorec = math.sqrt((1/((CRestrec*CConductividadCrec*Math.PI) - (1/CradioCond1rec**2))) + radioDielectricoCrec**2);
    
    ResultadoCradC.innerText = radioExternorec.toFixed(3);
    ResultadoCradD.innerText = radioDielectricoCrec.toFixed(3);
}

///////////////// Micro Dimensiones - Mrec /////////////////

function medidaCinta(){
    const MPermitividadrec = Number(document.getElementById("MPermitividadrec").value);
    const MImpedancia = Number(document.getElementById("MImpedancia").value);
    const opcion = Number(document.getElementById("comboBox").value)
    let resultado;

    if(opcion == 0){
        let Aop = ((MImpedancia/60)*(math.sqrt((MPermitividadrec + 1)/(2)))) + (((MPermitividadrec  -1 )/(MPermitividadrec +1))*(0.23 + (0.11/MPermitividadrec)));
        resultado =  (8*(Math.E**Aop))/(Math.pow(Math.E,(2*Aop)) - 2);
    }else{
        let Bop = (377 * Math.PI)/(2*MImpedancia*math.sqrt(MPermitividadrec));
        resultado = (2/Math.PI)*(Bop - 1 - math.log((2*Bop) - 1) + (((MPermitividadrec  - 1)/(2*MPermitividadrec))*(math.log(Bop - 1) + 0.39 - (0.61/MPermitividadrec))));        
    }
    ResultadoMrec.innerText = resultado.toFixed(3);
}