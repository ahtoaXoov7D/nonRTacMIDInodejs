/*
TODO list:
- READLINE
- RANDOM RANGE FUNKTIONEN
- STOCKPILES fur EDM/IDM GENRES (RHYTHM)
- SAMPLE FUNKTIONEN FUr ETURNING RANDOM ARRAYS
- L184, for (const offset of [12, 0, -12, -24]) {
    - i'd have to add or remove 'trackX' variables and all the associated copy/pastes for each one? USING ARRAYS
    - REFACTORING CODE
    */
    
    const fs = require('fs');
    const Midi = require('jsmidgen');
    const rl = require('readline')
    
    //******************************************* */
    
    const numMIDIfiles=10;
    
    const rhythmicMeasures = [16, 24, 32, 48, 64, 96, 128, 192, 256];
    const rhythmicMeasuresFast = [16, 24, 32, 48, 64];
    const rhythmicMeasuresSlow = [96, 128, 192, 256];
    
    const oten=Math.trunc(128*(1/3));
    
    // stockpileRhythm
    let rhythmicStockpile12tone1=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let rhythmicStockpile12tone2=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let rhythmicStockpile12tone3=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let rhythmicStockpile12tone4=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];                  
 
    //********************************************* */
    
    for(let i=0; i<32; i++) {
        rhythmicStockpile12tone1[i]=rhythmicMeasuresFast[Math.floor(Math.random() * Math.floor(rhythmicMeasuresFast.length))];
        rhythmicStockpile12tone2[i]=rhythmicMeasuresFast[Math.floor(Math.random() * Math.floor(rhythmicMeasuresFast.length))];
        rhythmicStockpile12tone3[i]=rhythmicMeasuresFast[Math.floor(Math.random() * Math.floor(rhythmicMeasuresFast.length))];
        rhythmicStockpile12tone4[i]=rhythmicMeasuresFast[Math.floor(Math.random() * Math.floor(rhythmicMeasuresFast.length))];
        console.log(rhythmicMeasuresFast[Math.floor(Math.random() * Math.floor(rhythmicMeasuresFast.length))]);
    }
    
    console.log(rhythmicStockpile12tone1); console.log(rhythmicStockpile12tone2); console.log(rhythmicStockpile12tone3); console.log(rhythmicStockpile12tone4);       
    
    //******************************************* */
       
    const majorScale                =       [0, 2, 4, 5, 7, 9, 11];          // stockpileMajorScale
    const minorScale                =       [0, 2, 3, 5, 7, 8, 10];          // stockpileMinorScale
    const minorHarmonicScale        =       [0, 2, 3, 5, 7, 8, 11];          // stockpileMinorHarmonicScale
    const minorMelodicUpScale       =       [0, 2, 3, 5, 7, 9, 11];          // stockpileMinorMelodicUpScale 
    const insenScale                =       [0, 1, 5, 7, 8, 10];             // stockpileInsenScale 
    const prometheusScale           =       [0, 2, 4, 6, 9, 10];             // stockpilePrometheusScale 
    const persianScale              =       [0, 2, 4, 5, 6, 8, 11];          // stockpilePersianScale 
    const pentatonic3plus2Scale     =       [0, 2, 4, 7, 9];                 // stockpilePentatonic3+2 Scale 
    const pentatonicInBlackScale    =       [0, 3, 6, 8, 10];                // stockpileScale   
    const gipsyScale                =       [0, 2, 3, 6, 7, 8, 10];          // gipsyScale 
    const hugarianGipsyScale        =       [0, 2, 3, 6, 7, 8, 11];          // stockpileHungarianGipsyScale 
    const bebopDominantScale        =       [0, 2, 4, 5, 7, 9, 10, 11];      // stockpileBebopDominantScale 
    const pedalNoteStockpile        =       [0, 0, 0, 0, 0, 0, 0];           // pedalNoteStockpile
    const dorianScale               =       [0, 2, 3, 5, 7, 9, 10];
    const acousticScale             =       [0, 2, 4, 6, 7, 9, 10];
    const adonaiMalakh              =       [0, 2, 4, 5, 7, 8, 10];
    const alegerianScale            =       [0, 2, 3, 6, 7, 8, 11];
    const alteredScale              =       [0, 1, 3, 4, 6, 8, 10];
    const augmentedScale            =       [0, 3, 4, 7, 8, 11];
    const bluesScale                =       [0, 3, 5, 6, 7, 10];
    const byzantineScale            =       [0, 1, 3, 4, 6, 7, 8, 12];
    const enigmaticScale            =       [0, 1, 4, 8, 8, 10, 11];
    const tritonScale               =       [0, 1, 4, 6, 7, 10];
    const ukranianDorianScale       =       [0, 2, 3, 6, 7, 9, 10];
    const slendroScale              =       [0, 2, 5, 7, 9];
    const istrianScale              =       [0, 1, 3, 4, 6, 7, 9];
    const euklerFokkerGenus         =       [0, 2, 5, 7, 10, 11];
    
     //******************************************* */
     

     console.log("choose a scale");                      // menu stockpile
     console.log("\n 1 . majorScale");                   // menu stockpile
     console.log("\n 2 . minorScale");                   // menu stockpile
     console.log("\n 3 . minorHarmonicScale");           // menu stockpile
     console.log("\n 4 . minorMelodicUpScale");          // menu stockpile
     console.log("\n 5 . insenScale");                   // menu stockpile
     console.log("\n 6 - prometheusScale");              // stockpilePrometheusScale 
     console.log("\n 7 - persianScale");                 // stockpilePersianScale 
     console.log("\n 8 - pentatonic3plus2Scale");        // stockpilePentatonic3+2 Scale 
     console.log("\n 9 - pentatonicInBlackScale");       // stockpileScale   
     console.log("\n 10 - gipsyScale");                  // gipsyScale 
     console.log("\n 11 - hugarianGipsyScale");          // stockpileHungarianGipsyScale 
     console.log("\n 12 - bebopDominantScale");          // stockpileBebopDominantScale 
     console.log("\n 13 - dorianScale");               
     console.log("\n 14 - acousticScale");             
     console.log("\n 15 - adonaiMalakh");              
     console.log("\n 16 - alegerianScale");            
     console.log("\n 17 - alteredScale");              
     console.log("\n 18 - augmentedScale");            
     console.log("\n 19 - bluesScale");                
     console.log("\n 20 - byzantineScale");            
     console.log("\n 21 - enigmaticScale");            
     console.log("\n 22 - tritonScale");               
     console.log("\n 23 - ukranianDorianScale");      
     console.log("\n 24 - slendroScale");              
     console.log("\n 25 - istrianScale");        
     console.log("\n 26 - euklerFokkerGenus");         
     
     //******************************************* */
    
     // reading and mapping scale
      
      // let myScale = rl.createInterface(process.stdin, process.stdout);  
      let myPitchClass;
      let myScale=5;
      
      function SwitchScale() {
          
          switch(myScale) {
              case 1: myPitchClass=majorScale; break;
              case 2: myPitchClass=minorScale; break;
              case 3: myPitchClass=minorHarmonicScale; break;
              case 4: myPitchClass=minorMelodicUpScale; break;
              case 5: myPitchClass=insenScale; break;
              case 6: myPitchClass=prometheusScale; break;
              case 7: myPitchClass=persianScale; break;
              case 8: myPitchClass=pentatonic3plus2Scale; break;
              case 9: myPitchClass=pentatonicInBlackScale; break;
              case 10: myPitchClass=gipsyScale; break;
              case 11: myPitchClass=hugarianGipsyScale; break;
              case 12: myPitchClass=bebopDominantScale; break;
              case 13: myPitchClass=dorianScale; break;               
              case 14: myPitchClass=acousticScale; break;             
              case 15: myPitchClass=adonaiMalakh; break;              
              case 16: myPitchClass=alegerianScale; break;            
              case 17: myPitchClass=alteredScale; break;              
              case 18: myPitchClass=augmentedScale; break;            
              case 19: myPitchClass=bluesScale; break;                
              case 20: myPitchClass=byzantineScale; break;            
              case 21: myPitchClass=enigmaticScale; break;            
              case 22: myPitchClass=tritonScale; break;               
              case 23: myPitchClass=ukranianDorianScale; break;      
              case 24: myPitchClass=slendroScale; break;              
              case 25: myPitchClass=istrianScale; break;        
              case 26: myPitchClass=euklerFokkerGenus;  break; 
          }
      }
      
      SwitchScale();
      
      // generating midi data
      
      //******************************************* */
      
      // reading and mapping root key
      
      console.log("select a root key");
      // let myRootKey = rl.createInterface(process.stdin, process.stdout);
      
      let myRootKey=58;

    //******************************************* */
    
    let file = new Midi.File();                         // instantiating Class FIle
    
    //******************************************* */
    
    let track1 = new Midi.Track();                      // instantiating Class track 
    let track2 = new Midi.Track();                      // instantiating Class track
    let track3 = new Midi.Track();                      // instantiating Class track
    let track4 = new Midi.Track();                      // instantiating Class track
    
    //******************************************* */
    
    file.addTrack(track1);                              // pointing file to track
    file.addTrack(track2);                              // pointing file to track
    file.addTrack(track3);                              // pointing file to track
    file.addTrack(track4);                              // pointing file to track
    
    //******************************************* */
    
    let pieceLength=rhythmicStockpile12tone1.length*16*5;
        
        function fastSemiTonal() {
            for(let z=0; z<numMIDIfiles; z++) {
                let file = new Midi.File();                         // instantiating Class FIle
                
                //******************************************* */
                
                let track1 = new Midi.Track();                      // instantiating Class track 
                let track2 = new Midi.Track();                      // instantiating Class track
                let track3 = new Midi.Track();                      // instantiating Class track
                let track4 = new Midi.Track();                      // instantiating Class track
                
                //******************************************* */
                
                file.addTrack(track1);                              // pointing file to track
                file.addTrack(track2);                              // pointing file to track
                file.addTrack(track3);                              // pointing file to track
                file.addTrack(track4);                              // pointing file to track
                
                // console.log(z);

                //******************************************* */

                myScale=((z%25)+1);

                SwitchScale();
                
                //******************************************* */

                for(let i=0; i<32; i++) {
                    rhythmicStockpile12tone1[i]=rhythmicMeasuresFast[Math.floor(Math.random() * Math.floor(rhythmicMeasuresFast.length))];
                    rhythmicStockpile12tone2[i]=rhythmicMeasuresFast[Math.floor(Math.random() * Math.floor(rhythmicMeasuresFast.length))];
                    rhythmicStockpile12tone3[i]=rhythmicMeasuresFast[Math.floor(Math.random() * Math.floor(rhythmicMeasuresFast.length))];
                    rhythmicStockpile12tone4[i]=rhythmicMeasuresFast[Math.floor(Math.random() * Math.floor(rhythmicMeasuresFast.length))];
                }
                
                //******************************************* */

                for(let i=0; i<2048; i++) {
                        track1.addNote(0, 64 + myPitchClass[Math.floor(Math.random() * Math.floor(myPitchClass.length))] + 12 + 12, rhythmicStockpile12tone1[i%rhythmicStockpile12tone1.length]);
                        track2.addNote(0, 64 + myPitchClass[Math.floor(Math.random() * Math.floor(myPitchClass.length))] + 0 + 0, rhythmicStockpile12tone2[i%rhythmicStockpile12tone2.length]);
                        track3.addNote(0, 64 + myPitchClass[Math.floor(Math.random() * Math.floor(myPitchClass.length))] - 12 - 12, rhythmicStockpile12tone3[i%rhythmicStockpile12tone3.length]);
                        //track4.addNote(0, 64 + myPitchClass[Math.floor(Math.random() * Math.floor(myPitchClass.length))] - 24 - 24, rhythmicStockpile12tone4[i%rhythmicStockpile12tone4.length]);
                    
                }
                fs.writeFileSync('./midiCompositions5/test' + z + '.mid', file.toBytes(), 'binary');
            }
        }

         //******************************************* */
        
        // select AC funktionen
        
        let switcher = 3;

        fastSemiTonal();