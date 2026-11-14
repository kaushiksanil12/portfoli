/* -----------------------------------------------------------------
   KAUSHIK ï¿½ PORTFOLIO RUNTIME ENGINE
   Features:
   - High-fidelity ASCII photogrammetry rendering (Head to Chest)
   - Void (Carbon) vs Ink (Paper) display toggle
   - Interactive mouse disturbance lens
   - Direct clipboard export
   - Architectural navigation & active scroll tracking
   ----------------------------------------------------------------- */

// Pure ASCII portrait data generated directly from Kaushik's photo (Whatsapp.jpeg)
// Head, face, features, polo shirt, collar and buttons
// Uses special characters and numbers: @ # 9 8 6 5 4 3 2 0 ? ! * + = ~ - : .

const ASCII_PORTRAIT_VOID = `                                                                                    
                                                                                    
                                                                                    
                                                                                    
                                      40?+=+?2!?                                    
                                   4!-::....::--*5                                  
                                 5~::-:......::::---~?                              
                                !~:..:::..:::::::::::.-2                            
                               !~-.........::.....:::.:-*                           
                             3=-::.. .. .......   ....:::2                          
                            ?=--:...    .:.  .     ...::-:?                         
                           4-::.:. .    .....    . .....::~                         
                           0~:................:----:.. .:::!                        
                           2~-::::..---::-~~=====+++=-. ..:.4                       
                           =-:....:=???!++*!!!!**++=++-  .::4                       
                           ~--::-=*??0022000000?!!!***+:...:3                       
                           *~--=?0?0223332222200!*+=++**:...?                       
                           4-:=00!!!*+=*?02220!*=~=+*++**:..!                       
                            ~-!20222?!++*?02?!*=~+*++*!??=..0                       
                            *-?32?+++:-~-!02?!=--+.:=-=*?!..4                       
                            *:?20?!?!===*?220?*=~~==+**!??:~                        
                            2+0200?!???0223320?!!****!??0?+*3                       
                            002333322000234432??!*!?00?000*!0                       
                            320334432??040242?!0?**?000000=!3                       
                             0?333320?22?*!!!=~=+!?!????0?+!                        
                             3?23220000?!!!*!!++++=~~+!??**0                        
                              3?222?+*?0000??!****+~~~*!!*4                         
                               42220****!?00???!!!*!++!**2                          
                                022002233330?!!????!**+++                           
                                 ???0222222?!!*!!!****==2                           
                                  ?!???022330??!!!+==~~!                            
                                  3*+=+*?00?**+*+=~---=                             
                                 ?22*====++=~~~~--::-=?                             
                                3?000?+~~~~-----::-~=*?                             
                                 ??2000?!*+=~~~~===+**?                             
                                @3+22202200!***++****!39                            
                              @@@@5?22220000?******!*39999                          
                           #8##@@@@93223220?!!!!!!*!49999988                        
                        #9#@#9#@@@@@@6222220??!!*+?69999988889                      
                     89999#@@#99#@@@@@#5344??!!*+2899999889999998                   
                   8899999##@@@#989#@@@@@##3+!288899889989999998888                 
                 98999999#999###@#868###96#@!?98888899999999988888888               
               9999999##############8689###@#999999999999#9999999888899             
             9999999#######@@@@#######869###99999999999999999999988888999           
           ###9999###########@@@@###9##98899###9999999999999999998898999999         
         @####99#################@######99##@@#999999999999999998888999999999       
        @@####99#####################99#9###@###999999999999999988888899989999      
       @@@############################999#9####9##99#99999999999888888889888999     
      @@@@@############################9##9999#9#####999999999998888888888889988    
     @@@##@###############################99#########999999999999888888888889#888   
    @@@@##@#9##############################9##@#######999999999#988888888888896688  
   #@@@####@#@####9########################9##@#######9999998689#988888888888966888 `;

const ASCII_PORTRAIT_INK = `                                                                                    
                                                                                    
                                                                                    
                                                                                    
                                      +?04540!20                                    
                                   +2988####88993=                                  
                                 =68898######888899960                              
                                268##888##88888888888#9!                            
                               269#########88#####888#893                           
                             *5988##@##@#######@@@####888!                          
                            05998###@@@@#8#@@#@@@@@###88980                         
                           +988#8#@#@@@@#####@@@@#@#####886                         
                           ?68################899998##@#8882                        
                           !698888##999889665555544459#@##8#+                       
                           598####850002443222233445449@@#88+                       
                           6998895300??!!??????022233348###8*                       
                           369950?0?!!***!!!!!??234544338###0                       
                           +985??22234530?!!!?235654344338##2                       
                            692!?!!!024430?!02356434432005##?                       
                            390*!044489692?!025994#8595302##+                       
                            380!?020255530!!?035665543320086                        
                            !4?!??02000?!!**!?0223333200?043*                       
                            ??!****!!???!*++*!002320??0???32?                       
                            *!?**++*!00?+?!+!02?0330??????52*                       
                             ?0****!?0!!0322256542020000?042                        
                             *0!*!!????02223224444566420033?                        
                              *0!!!0430????002333346663223+                         
                               +!!!?333320??0002223244233!                          
                                ?!!??!!****?0220000233444                           
                                 000?!!!!!!0223222333355!                           
                                  02000?!!**?00222455662                            
                                  *345430??033434569995                             
                                 0!!3555544566669988950                             
                                *0???046666999998896530                             
                                 00!???0234566665554330                             
                                 *4!!!?!!??23334433332*:                            
                                  =0!!!!????033333323*::::                          
                           .-..    :*!!*!!?022222232+:::::--                        
                        .:. .:.      ~!!!!!?0022340~:::::----:                      
                     -::::.  .::.     .=*++002234!-:::::--::::::-                   
                   --:::::..   .:-:.     ..*42!---::--::-::::::----                 
                 :-::::::.:::... .-~-...:~. 20:-----:::::::::--------               
               :::::::..............-~-:... .::::::::::::.:::::::----::             
             :::::::.......    .......-~:...:::::::::::::::::::::-----:::           
           ...::::...........    ...:..:--::...::::::::::::::::::--:-::::::         
          ....::................. ......::..  .:::::::::::::::::----:::::::::       
          ....::.....................::.:... ...::::::::::::::::------:::-::::      
          ............................:::.:....:..::.:::::::::::--------:---:::     
           ............................:..::::.:.....:::::::::::------------::--    
        .. ...............................::.........::::::::::::-----------:.---   
        .. .:..............................:.. .......:::::::::.:------------:~~--  
   .   .... . ....:........................:.. .......::::::-~-:.:-----------:~~--- `;

document.addEventListener('DOMContentLoaded', () => {

    // -- Minimalist ASCII Artwork Manager with Studio B&W Photo Reveal & Scanner --
    const asciiCanvas = document.getElementById('asciiCanvas');
    const artworkCard = document.getElementById('artworkCard');
    const artworkViewport = document.getElementById('artworkViewport');
    const asciiStage = document.getElementById('asciiStage');

    let currentMode = 'void'; // 'void' (dark) | 'ink' (light)
    let basePortrait = ASCII_PORTRAIT_VOID;

    function renderPortrait(text) {
        if (asciiCanvas) {
            asciiCanvas.textContent = text;
        }
    }

    function setMode(mode) {
        currentMode = mode;
        artworkCard.classList.remove('theme-void', 'theme-ink');

        if (mode === 'ink') {
            basePortrait = ASCII_PORTRAIT_INK;
            artworkCard.classList.add('theme-ink');
        } else {
            basePortrait = ASCII_PORTRAIT_VOID;
            artworkCard.classList.add('theme-void');
        }
        renderPortrait(basePortrait);
    }

    // Initialize in Void mode
    setMode('void');

    // Click card to toggle aesthetic between Void (dark) and Ink (light)
    if (asciiStage) {
        asciiStage.addEventListener('click', () => {
            setMode(currentMode === 'void' ? 'ink' : 'void');
        });

        // Accessible keyboard toggle (Enter or Space)
        asciiStage.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setMode(currentMode === 'void' ? 'ink' : 'void');
            }
        });
    }

    // -- Interactive Hover Reveal & Dynamic Cursor Split Scanner --
    const GLYPHS = ['@', '#', '9', '8', '6', '5', '4', '3', '2', '0', '?', '!', '*', '+', '=', '~'];
    let disturbanceTimer = null;

    const targetContainer = artworkViewport || asciiStage;

    if (asciiStage && targetContainer) {
        const handleScanPointer = (clientX, clientY) => {
            const rect = asciiStage.getBoundingClientRect();
            const relX = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
            const relY = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));

            // Parallax 3D tilt on the entire artwork viewport
            const tiltX = (relX - 0.5) * 8;
            const tiltY = (relY - 0.5) * 8;
            targetContainer.style.transform = `translate(${tiltX}px, ${tiltY}px)`;

            // Track cursor coordinates for the radial lens glare spotlight and split scanner
            if (artworkViewport) {
                const vpRect = artworkViewport.getBoundingClientRect();
                const lensX = clientX - vpRect.left;
                const lensY = clientY - vpRect.top;
                artworkViewport.style.setProperty('--lens-x', `${lensX}px`);
                artworkViewport.style.setProperty('--lens-y', `${lensY}px`);

                // Cursor X sweeps the split divider across the face in real time
                const splitPercent = Math.round(relX * 100);
                artworkViewport.style.setProperty('--split-x', `${splitPercent}%`);
            }

            // Subtle localized character mutation when hovering in ASCII mode
            if (!disturbanceTimer && asciiCanvas) {
                disturbanceTimer = setTimeout(() => {
                    const lines = basePortrait.split('\n');
                    const targetLine = Math.floor(relY * lines.length);
                    const targetCol = Math.floor(relX * 84);

                    if (lines[targetLine] && lines[targetLine][targetCol] && lines[targetLine][targetCol] !== ' ') {
                        const lineChars = lines[targetLine].split('');
                        const randGlyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
                        lineChars[targetCol] = randGlyph;
                        lines[targetLine] = lineChars.join('');
                        renderPortrait(lines.join('\n'));

                        setTimeout(() => {
                            renderPortrait(basePortrait);
                        }, 200);
                    }
                    disturbanceTimer = null;
                }, 60);
            }
        };

        const resetScanPointer = () => {
            targetContainer.style.transform = 'translate(0, 0)';
            if (artworkViewport) {
                artworkViewport.style.setProperty('--split-x', '0%');
            }
            renderPortrait(basePortrait);
        };

        asciiStage.addEventListener('mousemove', (e) => {
            handleScanPointer(e.clientX, e.clientY);
        });

        asciiStage.addEventListener('mouseleave', resetScanPointer);

        // Touch support for mobile and touch devices
        asciiStage.addEventListener('touchmove', (e) => {
            if (e.touches && e.touches[0]) {
                handleScanPointer(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: true });

        asciiStage.addEventListener('touchend', resetScanPointer);
    }

    // -- Direct Email Copy Bar --
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    const emailInput = document.getElementById('emailInput');
    const copyFeedback = document.getElementById('copyFeedback');

    if (copyEmailBtn && emailInput) {
        copyEmailBtn.addEventListener('click', () => {
            emailInput.select();
            navigator.clipboard.writeText(emailInput.value).then(() => {
                copyFeedback.textContent = 'Email address copied to clipboard.';
                copyEmailBtn.textContent = 'Copied';
                setTimeout(() => {
                    copyFeedback.textContent = '';
                    copyEmailBtn.textContent = 'Copy';
                }, 3000);
            });
        });
    }

    // -- Mobile Menu Toggle --
    const menuButton = document.getElementById('menuButton');
    const siteNav = document.querySelector('.site-nav');

    if (menuButton && siteNav) {
        menuButton.addEventListener('click', () => {
            const isOpen = siteNav.classList.toggle('open');
            menuButton.setAttribute('aria-expanded', isOpen);
        });

        siteNav.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                siteNav.classList.remove('open');
                menuButton.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // -- Smooth Scroll & Active Nav Tracking --
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');

    function updateActiveNav() {
        const scrollPosition = window.pageYOffset + 140;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPosition >= top && scrollPosition < top + height) {
                navItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();

    // Console colophon
    console.log(
        '%c Kaushik %c Portfolio • Generative ASCII Architecture ',
        'background: #09090b; color: #ffffff; font-weight: bold; padding: 4px 8px; border: 1px solid #27272a;',
        'background: #18181b; color: #a1a1aa; padding: 4px 8px;'
    );
});
