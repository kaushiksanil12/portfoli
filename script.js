/* ═════════════════════════════════════════════════════════════════
   KAUSHIK — PORTFOLIO RUNTIME ENGINE
   Features:
   - High-fidelity ASCII photogrammetry rendering
   - Void (Carbon) vs Ink (Paper) display toggle
   - Interactive mouse disturbance lens
   - Direct clipboard export
   - Architectural navigation & active scroll tracking
   ═════════════════════════════════════════════════════════════════ */

// Pure ASCII portrait data generated directly from Kaushik's photo (Whatsapp.jpeg)
// Uses special characters and numbers: @ # 9 8 6 5 4 3 2 0 ? ! * + = ~ - : .

const ASCII_PORTRAIT_VOID = `                                                                                
                                                                                
                                                                                
                                    620*+*23?4                                  
                                 2*~-:....:::-!343                              
                               2-:.--:..:::::::---:=5                           
                             6+~:...:....::..:.:::::-?#                         
                            *=-:.. .. ....... . ...::-*9                        
                          3~~-:. .    .:..      ....::-=                        
                          !-....... ........::--::.. :::?                       
                          *~:::::.~+=~~~==+*+****+=:  .::5                      
                         9~-::.:-*22220022220??!****: .::4                      
                         @=~--*2234566554444430?!!!?!-...0                      
                          2~-042000!*!2355430!++*!!!!?~..!                      
                          9~~544330*==+0442?*~=+~=+*?20..2                      
                           ~=652!!0=~++?4420*~==~+**!02-:8                      
                           ?*54332202345664320??!??0233*?4                      
                           2366665543256995422??0233343?03                      
                           8?6668642334?242!+??00222333*?6                      
                           @5365543343200???*+***++?020*2                       
                            #54443!!03332200?!!*++~*0??8                        
                              54442232355443322220!?!!3                         
                               332345455420?!?00???*+!@                         
                                40002344553200??+==~*#                          
                               @82*+**?20?*+*+==---+8                           
                               2343?+=~==~~~---:-~+?9@@@                        
                               4044442?!*=====+++!?08 @@                        
                                0244444442??!!!!???4   @                        
                                 #455554330??????08                             
                                   @544443200??!4                               
                                     @8#9220?02#                                
                                         #*0@                                   
                                   @      @                                     
                                                                                `;

const ASCII_PORTRAIT_INK = `                                                                                
                                                                                
                                                                                
                                     ~!?343!*0+                                 
                                  !3698####88892*+*                             
                                !98#998##888888899985=                          
                              ~468###8####88##8#8888890.                        
                             3598##@##@#######@#@###8893:                       
                           *6698#@#@@@@#8##@@@@@@####8895                       
                           29#######@########889988##@8880                      
                           3688888#645666554343333458@@#88=                     
                          :6988#893!!!!??!!!!?00233338@#88+                     
                           56993!!*+=~~==+++++*?0222029###?                     
                           !69?+!???232!*==+*?2443222206##2                     
                           :66=++**?3554?++!0365465430!?##!                     
                            65~=!22?56440++!?365564332?!98-                     
                            03=+**!!?!*+=~~+*!?00200?!**30+                     
                            !*~~~~==+*!=~::=+!!00?!***+*0?*                     
                            -0~~~-~+!**+0!+!2400??!!!***30~                     
                             =*~==+**+*!??00034333440?!?3!                      
                             .=+++*22?***!!??02234463?00-                       
                               =+++!!*!*==++**!!!!?2022*                        
                                **!*+=+==+!?020??000342                         
                                 +???!*++==*!??0045563.                         
                                 -!34330!?03434559994-                          
                                !*+*04565566699989640:                          
                                +?++++!0235555544420?-                          
                                 ?!+++++++!002222000+                           
                                  .+====+**?000000?-                            
                                     =++++*!??002+                              
                                       -.:!!?0?!.                               
                                          .3?                                   
                                                                                `;

document.addEventListener('DOMContentLoaded', () => {

    // ── ASCII Artwork Manager ──
    const asciiCanvas = document.getElementById('asciiCanvas');
    const artworkCard = document.getElementById('artworkCard');
    const modeVoidBtn = document.getElementById('modeVoidBtn');
    const modeInkBtn = document.getElementById('modeInkBtn');
    const copyAsciiBtn = document.getElementById('copyAsciiBtn');
    const asciiStage = document.getElementById('asciiStage');

    let currentMode = 'void'; // 'void' | 'ink'
    let basePortrait = ASCII_PORTRAIT_VOID;

    function renderPortrait(text) {
        if (asciiCanvas) {
            asciiCanvas.textContent = text;
        }
    }

    function setMode(mode) {
        currentMode = mode;
        if (mode === 'void') {
            basePortrait = ASCII_PORTRAIT_VOID;
            artworkCard.classList.remove('theme-ink');
            artworkCard.classList.add('theme-void');
            modeVoidBtn.classList.add('active');
            modeInkBtn.classList.remove('active');
        } else {
            basePortrait = ASCII_PORTRAIT_INK;
            artworkCard.classList.remove('theme-void');
            artworkCard.classList.add('theme-ink');
            modeInkBtn.classList.add('active');
            modeVoidBtn.classList.remove('active');
        }
        renderPortrait(basePortrait);
    }

    // Initialize in Void mode
    setMode('void');

    if (modeVoidBtn) {
        modeVoidBtn.addEventListener('click', () => setMode('void'));
    }
    if (modeInkBtn) {
        modeInkBtn.addEventListener('click', () => setMode('ink'));
    }

    // Click card stage to toggle mode
    if (asciiStage) {
        asciiStage.addEventListener('click', () => {
            setMode(currentMode === 'void' ? 'ink' : 'void');
        });
    }

    // ── Interactive Hover Disturbance (designskills) ──
    // Subtle localized micro-interaction on mouse move
    const GLYPHS = ['@', '#', '9', '8', '6', '5', '4', '3', '2', '0', '?', '!', '*', '+', '=', '~'];
    let isHovering = false;
    let disturbanceTimer = null;

    if (asciiStage && asciiCanvas) {
        asciiStage.addEventListener('mousemove', (e) => {
            const rect = asciiStage.getBoundingClientRect();
            const relX = (e.clientX - rect.left) / rect.width;
            const relY = (e.clientY - rect.top) / rect.height;

            // Parallax tilt
            const tiltX = (relX - 0.5) * 8;
            const tiltY = (relY - 0.5) * 8;
            asciiCanvas.style.transform = `translate(${tiltX}px, ${tiltY}px)`;

            // Subtle localized character mutation
            if (!disturbanceTimer) {
                disturbanceTimer = setTimeout(() => {
                    const lines = basePortrait.split('\n');
                    const targetLine = Math.floor(relY * lines.length);
                    const targetCol = Math.floor(relX * 80);

                    if (lines[targetLine] && lines[targetLine][targetCol] !== ' ') {
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
        });

        asciiStage.addEventListener('mouseleave', () => {
            asciiCanvas.style.transform = 'translate(0, 0)';
            renderPortrait(basePortrait);
        });
    }

    // ── Copy ASCII to Clipboard ──
    if (copyAsciiBtn) {
        copyAsciiBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(basePortrait).then(() => {
                const originalText = copyAsciiBtn.textContent;
                copyAsciiBtn.textContent = 'Copied!';
                copyAsciiBtn.style.borderColor = '#ffffff';
                setTimeout(() => {
                    copyAsciiBtn.textContent = originalText;
                    copyAsciiBtn.style.borderColor = '';
                }, 2000);
            });
        });
    }

    // ── Direct Email Copy Bar ──
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

    // ── Mobile Menu Toggle ──
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

    // ── Smooth Scroll & Active Nav Tracking ──
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
        '%c Kaushik %c Portfolio &bull; Generative ASCII Architecture ',
        'background: #09090b; color: #ffffff; font-weight: bold; padding: 4px 8px; border: 1px solid #27272a;',
        'background: #18181b; color: #a1a1aa; padding: 4px 8px;'
    );
});
