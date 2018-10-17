	var renkSayisi, katsayi, carpan, sonuc, birim, tolerans, sicaklikKatsayisi;
	function RenkSayisi(){
		renkSayisi = Number(document.getElementById('renk-sayisi').value);
		switch(renkSayisi){
			case 5:
			    document.getElementById('r1').style.display = 'block';
				document.getElementById('r2').style.display = 'block';
				document.getElementById('r3').style.display = 'block';
				document.getElementById('r4').style.display = 'block';
				document.getElementById('r5').style.display = 'block';
				document.getElementById('r6').style.display = 'none';
				document.getElementById('lbl1').innerHTML = "Renk 4";
				document.getElementById('lbl2').innerHTML = "Renk 5";
				break;
			case 6:
			    document.getElementById('r1').style.display = 'block';
				document.getElementById('r2').style.display = 'block';
				document.getElementById('r3').style.display = 'block';
				document.getElementById('r4').style.display = 'block';
				document.getElementById('r5').style.display = 'block';
				document.getElementById('r6').style.display = 'block';
				document.getElementById('lbl1').innerHTML = "Renk 4";
				document.getElementById('lbl2').innerHTML = "Renk 5";
				break;
			default:
			    document.getElementById('r1').style.display = 'block';
				document.getElementById('r2').style.display = 'block';
				document.getElementById('r4').style.display = 'block';
				document.getElementById('r5').style.display = 'block';
				document.getElementById('r3').style.display = 'none';
				document.getElementById('r6').style.display = 'none';
				document.getElementById('lbl1').innerHTML = "Renk 3";
				document.getElementById('lbl2').innerHTML = "Renk 4";
				break;
				KatSayi()
		}
	}
	
	function KatSayi(){
		if(renkSayisi == 4){
			katsayi = Number(document.getElementById('renk1').value + document.getElementById('renk2').value);
		}else if(renkSayisi == 5){
			katsayi = Number(document.getElementById('renk1').value + document.getElementById('renk2').value + document.getElementById('renk3').value);
		}else if(renkSayisi == 6){
			katsayi = Number(document.getElementById('renk1').value + document.getElementById('renk2').value + document.getElementById('renk3').value);
		}
		Carpan();
	}
	
	function Carpan(){
		carpan = Number(document.getElementById('carpan').value);
		sonuc= carpan*katsayi;
		if(sonuc >= 1000000){
			sonuc = sonuc/1000000;
			birim = "MΩ";
		}else if(sonuc >= 1000 && sonuc < 1000000){
			sonuc = sonuc/1000;
			birim = "kΩ";
		}else{
			birim = "Ω";
		}
		document.getElementById('deger').innerHTML = sonuc.toString() + " " + birim;
		document.getElementById('tlrns').innerHTML = document.getElementById('tolerans').value;
		document.getElementById('scklk').innerHTML = document.getElementById('sicaklik-katsayisi').value;		
		
	}