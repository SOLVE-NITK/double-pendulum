function runPage2() {
  background(255);

  stroke(0);
  fill(0);
  let q1 = spring1.w1.toFixed(4) / (2 * Math.PI);
  let q2 = spring1.w2.toFixed(4) / (2 * Math.PI);
  document.querySelector(".animation").style.display = "none";
  const page2 = document.querySelector(".page2");
  page2.style.display = "block";
  page2.innerHTML = `
  <p>The first Natural Frequency of the system(ω<sub>1</sub>) = ${q1.toFixed(
    6
  )} Hz</p>
  <p>The second Natural Frequency of the system(ω<sub>2</sub>) = ${q2.toFixed(
    6
  )} Hz</p>
  <p>The first Mode Shape Ratio [(X<sub>1</sub>>/X<sub>2</sub>>) AT ω<sub>1</sub>] = ${spring1.ar1.toFixed(
    4
  )}</p>
  <p>The second Mode Shape Ratio [(X<sub>1</sub>>/X<sub>2</sub>>) AT ω<sub>2</sub>] = ${spring1.ar2.toFixed(
    4
  )}</p>
  
  `;
  // strokeWeight(1);
  //   push();
  //   textFont("'Nunito', sans-serif");
  //   textSize(20);
  //   text("Detailed Results", 230, 35);
  //   textSize(13);
  //   strokeWeight(0);
  //   let colors = color("#089b93");
  //   let q1=spring1.w1.toFixed(4)/(2*Math.PI);
  //   let q2=spring1.w2.toFixed(4)/(2*Math.PI);
  //   function adjustTextSize() {
  //     if ($(window).width() < 450) {
  //       textSize(16);
  //       strokeWeight(0.3);
  //       fill(0)
  //       text('THE FIRST NATURAL FREQUENCY OF SYSTEM (ω\u2081) : ',30,150);
  //       fill(colors);
  //       text(q1.toFixed(6)+' Hz', 425, 150);

  //       fill(0)
  //       text('THE SECOND NATURAL FREQUENCY OF SYSTEM (ω\u2082) :',30,200);
  //       fill(colors);
  //       text(q2.toFixed(6)+' Hz', 440, 200);

  //       fill(0)
  //       text('THE FIRST MODE SHAPE RATIO [(X\u2081/X\u2082) AT ω\u2081] :',30,250);
  //       fill(colors);
  //       text(spring1.ar1.toFixed(4), 395, 250);

  //       fill(0)
  //       text('THE SECOND MODE SHAPE RATIO [(X\u2081/X\u2082) AT ω\u2082] : ',30,300);
  //       fill(colors);
  //       text(spring1.ar2.toFixed(4), 410, 300);

  //     } else {
  //       textSize(16);
  //       strokeWeight(0.3);
  //       fill(0)
  //       text('THE FIRST NATURAL FREQUENCY OF SYSTEM (ω\u2081) : ',30,150);
  //       fill(colors);
  //       text(q1.toFixed(6)+' Hz', 425, 150);

  //       fill(0)
  //       text('THE SECOND NATURAL FREQUENCY OF SYSTEM (ω\u2082) :',30,200);
  //       fill(colors);
  //       text(q2.toFixed(6)+' Hz', 440, 200);

  //       fill(0)
  //       text('THE FIRST MODE SHAPE RATIO [(X\u2081/X\u2082) AT ω\u2081] :',30,250);
  //       fill(colors);
  //       text(spring1.ar1.toFixed(4), 395, 250);

  //       fill(0)
  //       text('THE SECOND MODE SHAPE RATIO [(X\u2081/X\u2082) AT ω\u2082] : ',30,300);
  //       fill(colors);
  //       text(spring1.ar2.toFixed(4), 410, 300);

  //       // if(spring1.x1==spring1.x2){
  //       //   fill(0)
  //       // text('THE EQUATION OF MOTION OF M\u2081 : ',40,300);
  //       // fill(colors);
  //       // text(spring1.ar1.toFixed(4) * spring1.x2.toFixed(4)+' cos('+spring1.w1.toFixed(4)+'t)',270,300)
  //       // fill(0)
  //       // text('THE EQUATION OF MOTION OF M\u2082 : ',40,350);
  //       // fill(colors);
  //       // text(+spring1.x2.toFixed(2)+' cos('+spring1.w2.toFixed(4)+'t)',270,350)

  //       // }

  //       // else if(spring1.x1==-(spring1.x2)){
  //       //   fill(0);
  //       //     text('THE EQUATION OF MOTION OF M\u2081: ',40,300);
  //       //     fill(colors);
  //       //     text((spring1.ar2.toFixed(4)) * (spring1.x2.toFixed(4))+' cos('+spring1.w1.toFixed(4)+'t)',270,300);
  //       //     fill(0);
  //       //     text('THE EQUATION OF MOTION OF M\u2082: ',40,350);
  //       //     fill(colors);
  //       //     text(spring1.x2.toFixed(2)+' cos('+spring1.w2.toFixed(4)+'t)',270,350);

  //       // }
  //       // else{
  //       //   fill(0);
  //       //     text('THE EQUATION OF MOTION OF M\u2081: ',40,300);
  //       //     fill(colors);
  //       //     text((spring1.x1d.toFixed(4))+' cos('+spring1.w1.toFixed(4)+'t) + ('+(spring1.x1dd.toFixed(4))+') cos('+spring1.w2.toFixed(4)+'t)',270,300);

  //       //     fill(0);
  //       //     text('THE EQUATION OF MOTION OF M\u2082: ',40,350);
  //       //     fill(colors);

  //       //     text((spring1.x2d.toFixed(4))+' cos('+spring1.w1.toFixed(4)+'t) + ('+(spring1.x2dd.toFixed(4))+') cos('+spring1.w2.toFixed(4)+'t)',270,350);

  //       // }
  //     }
  //   }

  //   adjustTextSize();

  //   // Attach the function to the window.resize event
  // $(window).resize(adjustTextSize);
  // text('THE FIRST NATURAL FREQUENCY OF SYSTEM (ω\u2081) : '+q1.toFixed(6)+' Hz',30,150);
  // text('THE SECOND NATURAL FREQUENCY OF SYSTEM (ω\u2082) : '+q2.toFixed(6)+' Hz',30,200);
  // text('THE FIRST MODE SHAPE RATIO [(X\u2081/X\u2082) AT ω\u2081] : '+spring1.ar1.toFixed(4),30,250);
  // text('THE SECOND MODE SHAPE RATIO [(X\u2081/X\u2082) AT ω\u2082] : '+spring1.ar2.toFixed(4),30,300);
  strokeWeight();
  spring1.initialise(l1, l2, a1, m1, a2, m2);
  spring1.update(t, factor);
  l1 = $("#fSpinner").spinner("value");
  l2 = $("#omegaSpinner").spinner("value");
  a1 = $("#k1Spinner").spinner("value");
  m1 = $("#m1Spinner").spinner("value");
  a2 = $("#k2Spinner").spinner("value");
  m2 = $("#m2Spinner").spinner("value");

  magFac1.initialise();
  // magFac1.draw();

  // t = t + dt;
}
