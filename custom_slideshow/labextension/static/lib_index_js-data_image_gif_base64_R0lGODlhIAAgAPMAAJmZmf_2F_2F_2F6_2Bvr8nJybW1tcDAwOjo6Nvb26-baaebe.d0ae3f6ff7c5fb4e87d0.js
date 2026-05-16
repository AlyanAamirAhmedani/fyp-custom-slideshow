"use strict";
(self["webpackChunkcustom_slideshow"] = self["webpackChunkcustom_slideshow"] || []).push([["lib_index_js-data_image_gif_base64_R0lGODlhIAAgAPMAAJmZmf_2F_2F_2F6_2Bvr8nJybW1tcDAwOjo6Nvb26-baaebe"],{

/***/ "./lib/constants.js":
/*!**************************!*\
  !*** ./lib/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PLUGIN_ID: () => (/* binding */ PLUGIN_ID),
/* harmony export */   SlideType: () => (/* binding */ SlideType),
/* harmony export */   Transition: () => (/* binding */ Transition)
/* harmony export */ });
const PLUGIN_ID = 'custom-slideshow';
var SlideType;
(function (SlideType) {
    SlideType["SLIDE"] = "slide";
    SlideType["SUBSLIDE"] = "subslide";
    SlideType["FRAGMENT"] = "fragment";
    SlideType["NOTES"] = "notes";
    SlideType["SKIP"] = "skip";
    SlideType["HIDDEN"] = "hidden";
    SlideType["VISIBLE"] = "fragment-visible";
})(SlideType || (SlideType = {}));
var Transition;
(function (Transition) {
    Transition["NONE"] = "none";
    Transition["SLIDE"] = "slide";
    Transition["FADE"] = "fade";
    Transition["ZOOM"] = "zoom";
})(Transition || (Transition = {}));



/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/notebook */ "webpack/sharing/consume/default/@jupyterlab/notebook");
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/settingregistry */ "webpack/sharing/consume/default/@jupyterlab/settingregistry");
/* harmony import */ var _jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./lib/constants.js");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugin */ "./lib/plugin.js");
/* harmony import */ var _mathjax4_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mathjax4/plugin */ "./lib/mathjax4/plugin.js");





/**
 * Initialization data for the custom-slideshow extension.
 */
const plugin = {
    id: `${_constants__WEBPACK_IMPORTED_MODULE_2__.PLUGIN_ID}:plugin`,
    description: 'JupyterLab extension for animated slideshow.',
    autoStart: true,
    requires: [_jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_0__.INotebookTracker, _jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_1__.ISettingRegistry],
    activate: (app, nbTracker, settingRegistry) => {
        console.log('JupyterLab extension custom-slideshow is activated!');
        (0,_plugin__WEBPACK_IMPORTED_MODULE_3__["default"])(app, nbTracker, settingRegistry);
        if (settingRegistry) {
            settingRegistry
                .load(plugin.id)
                .then(settings => {
                console.log('custom-slideshow settings loaded:', settings.composite);
            })
                .catch(reason => {
                console.error('Failed to load settings for custom-slideshow.', reason);
            });
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([plugin, _mathjax4_plugin__WEBPACK_IMPORTED_MODULE_4__["default"]]);


/***/ }),

/***/ "./lib/mathjax4/plugin.js":
/*!********************************!*\
  !*** ./lib/mathjax4/plugin.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MathJax4Typesetter: () => (/* binding */ MathJax4Typesetter),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_rendermime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/rendermime */ "webpack/sharing/consume/default/@jupyterlab/rendermime");
/* harmony import */ var _jupyterlab_rendermime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_rendermime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mathjax_src_mjs_mathjax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mathjax/src/mjs/mathjax */ "./node_modules/@mathjax/src/mjs/mathjax.js");
/* harmony import */ var _mathjax_src_mjs_input_tex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mathjax/src/mjs/input/tex */ "./node_modules/@mathjax/src/mjs/input/tex.js");
/* harmony import */ var _mathjax_src_mjs_input_tex_html_HtmlConfiguration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mathjax/src/mjs/input/tex/html/HtmlConfiguration */ "./node_modules/@mathjax/src/mjs/input/tex/html/HtmlConfiguration.js");
/* harmony import */ var _mathjax_src_mjs_output_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mathjax/src/mjs/output/svg */ "./node_modules/@mathjax/src/mjs/output/svg.js");
/* harmony import */ var _mathjax_src_mjs_ui_safe_SafeHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mathjax/src/mjs/ui/safe/SafeHandler */ "./node_modules/@mathjax/src/mjs/ui/safe/SafeHandler.js");
/* harmony import */ var _mathjax_src_mjs_handlers_html_HTMLHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mathjax/src/mjs/handlers/html/HTMLHandler */ "./node_modules/@mathjax/src/mjs/handlers/html/HTMLHandler.js");
/* harmony import */ var _mathjax_src_mjs_adaptors_browserAdaptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mathjax/src/mjs/adaptors/browserAdaptor */ "./node_modules/@mathjax/src/mjs/adaptors/browserAdaptor.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./lib/constants.js");
// MathJax 4 LaTex typesetter, based on jupyterlab-mathjax3 extension
// https://pypi.org/project/jupyterlab-mathjax3




// the cause of source map parsing warnings (https://github.com/webyonet/react-native-mathjax-html-to-svg/issues/15)





_mathjax_src_mjs_mathjax__WEBPACK_IMPORTED_MODULE_1__.mathjax.handlers.register((0,_mathjax_src_mjs_ui_safe_SafeHandler__WEBPACK_IMPORTED_MODULE_5__.SafeHandler)(new _mathjax_src_mjs_handlers_html_HTMLHandler__WEBPACK_IMPORTED_MODULE_6__.HTMLHandler((0,_mathjax_src_mjs_adaptors_browserAdaptor__WEBPACK_IMPORTED_MODULE_7__.browserAdaptor)())));
class MathJax4Typesetter {
    constructor() {
        const svg = new _mathjax_src_mjs_output_svg__WEBPACK_IMPORTED_MODULE_4__.SVG();
        const tex = new _mathjax_src_mjs_input_tex__WEBPACK_IMPORTED_MODULE_2__.TeX({
            inlineMath: [
                ['$', '$'],
                ['\\(', '\\)']
            ],
            displayMath: [
                ['$$', '$$'],
                ['\\[', '\\]']
            ],
            packages: ['base', 'html'],
            processEscapes: true,
            processEnvironments: true
        });
        this._html = _mathjax_src_mjs_mathjax__WEBPACK_IMPORTED_MODULE_1__.mathjax.document(window.document, {
            InputJax: tex,
            OutputJax: svg
        });
    }
    typeset(node) {
        this._html
            .clear()
            .findMath({ elements: [node] })
            .compile()
            .getMetrics()
            .typeset()
            .updateDocument();
    }
}
const plugin = {
    id: `${_constants__WEBPACK_IMPORTED_MODULE_8__.PLUGIN_ID}:mathjax`,
    description: 'MathJax 4 typesetter',
    requires: [],
    provides: _jupyterlab_rendermime__WEBPACK_IMPORTED_MODULE_0__.ILatexTypesetter,
    activate: () => new MathJax4Typesetter(),
    autoStart: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);


/***/ }),

/***/ "./lib/plugin.js":
/*!***********************!*\
  !*** ./lib/plugin.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./lib/constants.js");
/* harmony import */ var _slideType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideType */ "./lib/slideType.js");
/* harmony import */ var reveal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reveal.js */ "webpack/sharing/consume/default/reveal.js/reveal.js");
/* harmony import */ var reveal_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reveal_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_reveal_js_dist_reveal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/reveal.js/dist/reveal.css */ "./node_modules/reveal.js/dist/reveal.css");
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @svgdotjs/svg.js */ "webpack/sharing/consume/default/@svgdotjs/svg.js/@svgdotjs/svg.js");
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_4__);





const plugin = (app, tracker, settings) => {
    const { commands } = app;
    // console.log('App:');
    // console.log(app);
    // console.log('Tracker:');
    // console.log(tracker);
    // console.log('Settings:');
    // console.log(settings);
    let panel;
    let windowedPanel;
    let windowingMode;
    let csSettings = {};
    let slideToggle = false;
    let layout = [];
    let slides = [];
    let reveal = null;
    // Animate plugin by Asvin Goel (https://github.com/rajgoel/reveal.js-plugins)
    // does not work when imported at the top
    Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_svgdotjs_svg_js_src_main_js"), __webpack_require__.e("lib_rajgoel_animate_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./rajgoel/animate.js */ "./lib/rajgoel/animate.js"));
    __webpack_require__.e(/*! import() */ "lib_rajgoel_loadcontent_js").then(__webpack_require__.bind(__webpack_require__, /*! ./rajgoel/loadcontent.js */ "./lib/rajgoel/loadcontent.js"));
    // settings
    const loadSettings = (setting) => {
        return {
            dummy: setting.get('dummy').composite,
            default_transition: setting.get('default_transition')
                .composite
        };
    };
    Promise.all([app.restored, settings.load(`${_constants__WEBPACK_IMPORTED_MODULE_0__.PLUGIN_ID}:plugin`)]).then(([, settingRes]) => {
        csSettings = loadSettings(settingRes);
        // update settings
        settingRes.changed.connect(() => {
            console.log('custom-slideshow settings updated:');
            csSettings = loadSettings(settingRes);
            console.log(csSettings);
        });
        // main menu commands
        commands.addCommand('slideshow:start-first', {
            label: 'Start from first cell',
            isEnabled: () => !slideToggle,
            execute: async () => {
                try {
                    initReveal();
                }
                catch (e) {
                    console.error('Error starting slideshow:');
                    console.error(e);
                }
            }
        });
        commands.addCommand('slideshow:start-current', {
            label: 'Start from current cell',
            isEnabled: () => !slideToggle,
            execute: () => {
                try {
                    initReveal('current');
                }
                catch (e) {
                    console.error('Error starting slideshow:');
                    console.error(e);
                }
            }
        });
        // placeholder command & emergency exit
        commands.addCommand('slideshow:exit', {
            label: 'Exit slideshow',
            isEnabled: () => slideToggle,
            execute: () => {
                try {
                    exitReveal();
                }
                catch (e) {
                    console.error('Error exiting slideshow: ');
                    console.error(e);
                }
            }
        });
    });
    const initReveal = (mode = 'first') => {
        slideToggle = true;
        layout = [];
        slides = [];
        if (tracker.currentWidget) {
            panel = tracker.currentWidget;
            panel.context.ready.then(async () => {
                miscStyles(panel);
                await getCells(panel).then(async (cells) => {
                    var _a;
                    cells.forEach((cell, index) => {
                        var _a, _b, _c, _d, _e;
                        const slideType = (_a = cell.model.metadata.slideshow) === null || _a === void 0 ? void 0 : _a.slide_type;
                        const transition = (_b = cell.model.metadata.slideshow) === null || _b === void 0 ? void 0 : _b.transition;
                        const transitionOut = (_c = cell.model.metadata.slideshow) === null || _c === void 0 ? void 0 : _c.transition_out;
                        const transitionDuration = (_e = (_d = cell.model.metadata.slideshow) === null || _d === void 0 ? void 0 : _d.transition_duration) !== null && _e !== void 0 ? _e : 0.5;
                        switch (slideType) {
                            case _constants__WEBPACK_IMPORTED_MODULE_0__.SlideType.SLIDE: {
                                layout.push(new _slideType__WEBPACK_IMPORTED_MODULE_1__.Slide(index, cell, transition, transitionOut, transitionDuration));
                                break;
                            }
                            case _constants__WEBPACK_IMPORTED_MODULE_0__.SlideType.SUBSLIDE: {
                                layout.push(layout.length === 0
                                    ? new _slideType__WEBPACK_IMPORTED_MODULE_1__.Slide(index, cell, transition, transitionOut, transitionDuration)
                                    : new _slideType__WEBPACK_IMPORTED_MODULE_1__.Subslide(index, cell, transition, transitionOut, transitionDuration));
                                break;
                            }
                            case _constants__WEBPACK_IMPORTED_MODULE_0__.SlideType.FRAGMENT: {
                                if (layout.length === 0) {
                                    layout.push(new _slideType__WEBPACK_IMPORTED_MODULE_1__.Slide(index, cell, transition, transitionOut, transitionDuration));
                                }
                                else {
                                    // add to last slide
                                    layout[layout.length - 1].fragments.push(new _slideType__WEBPACK_IMPORTED_MODULE_1__.Fragment(index, cell, transition, transitionDuration));
                                }
                                break;
                            }
                            case _constants__WEBPACK_IMPORTED_MODULE_0__.SlideType.SKIP: {
                                break;
                            }
                            // no slide type
                            default: {
                                if (layout.length === 0) {
                                    layout.push(new _slideType__WEBPACK_IMPORTED_MODULE_1__.Slide(index, cell, transition, transitionOut, transitionDuration));
                                }
                                else {
                                    const lastSlide = layout[layout.length - 1];
                                    // add to last fragment
                                    if (lastSlide.fragments.length > 0) {
                                        lastSlide.fragments[lastSlide.fragments.length - 1].children.push(new _slideType__WEBPACK_IMPORTED_MODULE_1__.Cell(index, cell));
                                    }
                                    else {
                                        lastSlide.children.push(new _slideType__WEBPACK_IMPORTED_MODULE_1__.Cell(index, cell));
                                    }
                                }
                                break;
                            }
                        }
                    });
                    for (let i = 0; i < layout.length; i++) {
                        if (layout[i] instanceof _slideType__WEBPACK_IMPORTED_MODULE_1__.Slide) {
                            const slideOuter = document.createElement('section');
                            if (layout[i].transition) {
                                let transition = layout[i].transition;
                                if (layout[i].transitionOut) {
                                    transition += `-in ${layout[i].transitionOut}-out`;
                                }
                                slideOuter.setAttribute('data-transition', transition);
                                if ((_a = layout[i].cell.model.metadata.slideshow) === null || _a === void 0 ? void 0 : _a.slide_dir) {
                                    slideOuter.classList.add(layout[i].cell.model.metadata.slideshow.slide_dir);
                                }
                            }
                            slideOuter.style.transitionDuration = `${layout[i].transitionDuration}s`;
                            const slideInner = document.createElement('section');
                            slideOuter.appendChild(slideInner);
                            addToRevealSlide(slideInner, layout[i]);
                            slides.push(slideOuter);
                        }
                        else if (layout[i] instanceof _slideType__WEBPACK_IMPORTED_MODULE_1__.Subslide) {
                            const subslide = document.createElement('section');
                            addToRevealSlide(subslide, layout[i]);
                            slides[slides.length - 1].appendChild(subslide);
                        }
                    }
                    const revealContainer = document.createElement('div');
                    revealContainer.className = 'reveal';
                    const revealSlides = document.createElement('div');
                    revealSlides.className = 'slides';
                    for (let i = 0; i < slides.length; i++) {
                        revealSlides.appendChild(slides[i]);
                    }
                    revealContainer.appendChild(revealSlides);
                    panel.content.node.insertBefore(revealContainer, panel.content.node.firstChild);
                    reveal = new (reveal_js__WEBPACK_IMPORTED_MODULE_2___default())(revealContainer, {
                        // @ts-expect-error: required for Animate plugin to work
                        animate: {
                            autoplay: true
                        },
                        plugins: [window.RevealLoadContent, window.RevealAnimate],
                        transition: csSettings.default_transition || 'slide'
                    });
                    await reveal.initialize().then(() => {
                        var _a;
                        if (reveal !== null) {
                            if (mode === 'first') {
                                reveal.slide(0);
                            }
                            else if (mode === 'current') {
                                let activeIndex = panel.content.activeCellIndex || 0;
                                while (![
                                    _constants__WEBPACK_IMPORTED_MODULE_0__.SlideType.SLIDE,
                                    _constants__WEBPACK_IMPORTED_MODULE_0__.SlideType.SUBSLIDE,
                                    _constants__WEBPACK_IMPORTED_MODULE_0__.SlideType.FRAGMENT
                                ].includes((_a = cells[activeIndex].model.metadata.slideshow) === null || _a === void 0 ? void 0 : _a.slide_type) &&
                                    activeIndex > 0) {
                                    activeIndex--;
                                }
                                const activeCell = cells[activeIndex];
                                const slides = reveal.getHorizontalSlides();
                                let cellFound = false;
                                // find horizontal slide index
                                for (let i = 0; i < slides.length; i++) {
                                    if (cellFound) {
                                        break;
                                    }
                                    // find vertical slide index
                                    for (let j = 0; j < slides[i].children.length; j++) {
                                        if (slides[i].children[j].innerHTML.includes(activeCell.node.innerHTML)) {
                                            // find fragment index
                                            let fragment = undefined;
                                            if (slides[i].children[j].children.length > 1) {
                                                for (let k = 0; k < slides[i].children[j].children.length; k++) {
                                                    if (slides[i].children[j].children[k].innerHTML.includes(activeCell.node.innerHTML)) {
                                                        fragment = k - 1;
                                                        break;
                                                    }
                                                }
                                            }
                                            reveal.slide(i, j, fragment);
                                            cellFound = true;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    });
                    // console.log(`Reveal.js plugins: ${reveal.getPlugins()}`);
                });
                document.addEventListener('fullscreenchange', exitRevealEvent);
                await panel.content.node.requestFullscreen();
            });
        }
    };
    const exitRevealEvent = () => {
        if (!document.fullscreenElement) {
            exitReveal();
        }
    };
    const addToRevealSlide = (slide, item) => {
        var _a, _b, _c, _d;
        if (item.cell.model.type === 'code' &&
            ((_a = item.cell.model.metadata.slideshow) === null || _a === void 0 ? void 0 : _a.hide_code)) {
            item.cell.node.classList.add('hide-code');
        }
        if (item.transition) {
            let transition = item.transition;
            if (item.transitionOut) {
                transition += `-in ${item.transitionOut}-out`;
            }
            slide.setAttribute('data-transition', transition);
            if ((_b = item.cell.model.metadata.slideshow) === null || _b === void 0 ? void 0 : _b.slide_dir) {
                slide.classList.add(item.cell.model.metadata.slideshow.slide_dir);
            }
        }
        slide.style.transitionDuration = `${item.transitionDuration}s`;
        const container = document.createElement('div');
        container.appendChild(item.cell.node);
        (_c = item.children) === null || _c === void 0 ? void 0 : _c.forEach((child) => {
            addToRevealSlide(container, child);
        });
        slide.appendChild(container);
        (_d = item.fragments) === null || _d === void 0 ? void 0 : _d.forEach((fragment) => {
            var _a;
            const fragContainer = document.createElement('div');
            fragContainer.classList.add('fragment');
            switch (fragment.transition) {
                case _constants__WEBPACK_IMPORTED_MODULE_0__.Transition.SLIDE: {
                    fragContainer.classList.add(((_a = fragment.cell.model.metadata.slideshow) === null || _a === void 0 ? void 0 : _a.slide_dir) === 'vertical'
                        ? 'fade-up'
                        : 'fade-left');
                    break;
                }
                case _constants__WEBPACK_IMPORTED_MODULE_0__.Transition.ZOOM: {
                    fragContainer.classList.add('zoom');
                    break;
                }
                case _constants__WEBPACK_IMPORTED_MODULE_0__.Transition.NONE: {
                    fragContainer.classList.add('none');
                    break;
                }
            }
            addToRevealSlide(fragContainer, fragment);
            slide.appendChild(fragContainer);
        });
    };
    // init DOM elements
    /*
    <(sub)slide>
      slides
      children
      fragments
      more children
    </(sub)slide>
    */
    // cell styles
    const customStyle = (item, add = true) => {
        var _a, _b;
        // select both rendered and raw cells
        document
            .querySelectorAll(`
      .cell${item.index} .cm-scroller,
      .cell${item.index} .jp-RenderedMarkdown,
      .cell${item.index} .jp-RenderedText *
    `)
            .forEach(child => {
            if (add) {
                // console.log(window.getComputedStyle(child).fontSize);
                // TODO: put in metadata for cell size, position, etc.
                // placeholder style for not having to squeeze eyes
                child.setAttribute('style', 'font-size: 200%;');
            }
            else {
                child.removeAttribute('style');
            }
        });
        if (!add) {
            item.cell.node.classList.remove(`cell${item.index}`);
        }
        (_a = item.children) === null || _a === void 0 ? void 0 : _a.forEach((child) => {
            customStyle(child, add);
        });
        (_b = item.fragments) === null || _b === void 0 ? void 0 : _b.forEach((fragment) => {
            customStyle(fragment, add);
        });
    };
    const exitReveal = () => {
        slideToggle = false;
        clearAll(panel);
        document.removeEventListener('fullscreenchange', exitRevealEvent);
        panel.content.node.removeChild(panel.content.node.firstChild);
        reveal === null || reveal === void 0 ? void 0 : reveal.destroy();
    };
    // clean up notebook layout for slideshow
    const miscStyles = async (panel, start = true) => {
        var _a, _b, _c;
        if (start) {
            panel.content.addClass('slide-container');
            panel.toolbar.addClass(_constants__WEBPACK_IMPORTED_MODULE_0__.SlideType.HIDDEN);
            // stop windowing update, which messes with cell rendering
            // code ref: jupyterlab-rise
            windowingMode = panel.content.notebookConfig.windowingMode;
            panel.content.notebookConfig = {
                ...panel.content.notebookConfig,
                windowingMode: 'none'
            };
            // detach cells
            windowedPanel = document.querySelector('.slide-container .jp-WindowedPanel-viewport');
            await getCells(panel).then(cells => {
                cells.forEach(cell => {
                    try {
                        windowedPanel.removeChild(cell.node);
                    }
                    catch (e) {
                        /* cell is already detached by Jupyter windowing */
                    }
                });
            });
            // for (let i = 0; i < panel.content.node.children.length; i++) {
            //   panel.content.node.children.item(i)?.classList.add(SlideType.HIDDEN);
            // }
            const footers = document.querySelectorAll('.jp-Notebook-footer');
            for (let i = 0; i < footers.length; i++) {
                (_a = footers.item(i)) === null || _a === void 0 ? void 0 : _a.classList.add(_constants__WEBPACK_IMPORTED_MODULE_0__.SlideType.HIDDEN);
            }
        }
        else {
            panel.content.removeClass('slide-container');
            panel.toolbar.removeClass(_constants__WEBPACK_IMPORTED_MODULE_0__.SlideType.HIDDEN);
            // resume windowing update
            panel.content.notebookConfig = {
                ...panel.content.notebookConfig,
                windowingMode: windowingMode
            };
            // reattach cells
            await getCells(panel).then(cells => {
                cells.forEach(cell => {
                    windowedPanel.appendChild(cell.node);
                });
            });
            for (let i = 0; i < panel.content.node.children.length; i++) {
                (_b = panel.content.node.children.item(i)) === null || _b === void 0 ? void 0 : _b.classList.remove(_constants__WEBPACK_IMPORTED_MODULE_0__.SlideType.HIDDEN);
            }
            const footers = document.querySelectorAll('.jp-Notebook-footer');
            for (let i = 0; i < footers.length; i++) {
                (_c = footers.item(i)) === null || _c === void 0 ? void 0 : _c.classList.remove(_constants__WEBPACK_IMPORTED_MODULE_0__.SlideType.HIDDEN);
            }
        }
    };
    const getCells = async (panel) => {
        let cells = [];
        await panel.context.ready;
        await Promise.all(panel.content.widgets.map(cell => cell.ready)).then(() => {
            cells = [...panel.content.widgets];
        });
        return cells;
    };
    const clearStyles = (node, slideType = true) => {
        if (slideType) {
            node.classList.remove(...Object.values(_constants__WEBPACK_IMPORTED_MODULE_0__.SlideType));
        }
        node.style.removeProperty('transition-duration');
        node.classList.remove(_constants__WEBPACK_IMPORTED_MODULE_0__.SlideType.HIDDEN);
        ['in', 'out'].forEach(dir => {
            node.classList.remove(...Object.values(_constants__WEBPACK_IMPORTED_MODULE_0__.Transition).map(name => `${name}-${dir}`));
            ['left', 'right', 'up', 'down'].forEach(side => {
                node.classList.remove(`${_constants__WEBPACK_IMPORTED_MODULE_0__.Transition.SLIDE}-${dir}-${side}`);
            });
        });
    };
    const clearAll = async (panel) => {
        miscStyles(panel, false);
        layout.forEach(slide => {
            customStyle(slide, false);
        });
        await getCells(panel).then(cells => {
            cells.forEach(cell => {
                clearStyles(cell.node);
                cell.node.classList.remove('hide-code');
            });
        });
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);


/***/ }),

/***/ "./lib/slideType.js":
/*!**************************!*\
  !*** ./lib/slideType.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cell: () => (/* binding */ Cell),
/* harmony export */   Fragment: () => (/* binding */ Fragment),
/* harmony export */   Slide: () => (/* binding */ Slide),
/* harmony export */   Subslide: () => (/* binding */ Subslide)
/* harmony export */ });
class Cell {
    constructor(index, cell) {
        this.index = index;
        this.cell = cell;
    }
}
class Slide extends Cell {
    constructor(index, cell, transition, transitionOut, transitionDuration) {
        super(index, cell);
        this.transition = transition;
        this.transitionOut = transitionOut;
        this.transitionDuration = transitionDuration;
        this.fragments = [];
        this.children = [];
    }
}
class Subslide extends Cell {
    constructor(index, cell, transition, transitionOut, transitionDuration) {
        super(index, cell);
        this.transition = transition;
        this.transitionOut = transitionOut;
        this.transitionDuration = transitionDuration;
        this.fragments = [];
        this.children = [];
    }
}
class Fragment extends Cell {
    constructor(index, cell, transition, transitionDuration) {
        super(index, cell);
        this.transition = transition;
        this.transitionDuration = transitionDuration;
        this.children = [];
    }
}



/***/ }),

/***/ "data:image/gif;base64,R0lGODlhIAAgAPMAAJmZmf%2F%2F%2F6%2Bvr8nJybW1tcDAwOjo6Nvb26ioqKOjo7Ozs%2FLy8vz8%2FAAAAAAAAAAAACH%2FC05FVFNDQVBFMi4wAwEAAAAh%2FhpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh%2BQQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ%2FV%2FnmOM82XiHRLYKhKP1oZmADdEAAAh%2BQQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY%2FCZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB%2BA4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6%2BHo7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq%2BB6QDtuetcaBPnW6%2BO7wDHpIiK9SaVK5GgV543tzjgGcghAgAh%2BQQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK%2B%2BG%2Bw48edZPK%2BM6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE%2BG%2BcD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm%2BFNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk%2BaV%2BoJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0%2FVNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc%2BXiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30%2FiI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE%2FjiuL04RGEBgwWhShRgQExHBAAh%2BQQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR%2BipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY%2BYip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd%2BMFCN6HAAIKgNggY0KtEBAAh%2BQQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1%2BvsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d%2BjYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg%2BygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0%2Bbm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h%2BKr0SJ8MFihpNbx%2B4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX%2BBP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA%3D%3D":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/gif;base64,R0lGODlhIAAgAPMAAJmZmf%2F%2F%2F6%2Bvr8nJybW1tcDAwOjo6Nvb26ioqKOjo7Ozs%2FLy8vz8%2FAAAAAAAAAAAACH%2FC05FVFNDQVBFMi4wAwEAAAAh%2FhpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh%2BQQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ%2FV%2FnmOM82XiHRLYKhKP1oZmADdEAAAh%2BQQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY%2FCZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB%2BA4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6%2BHo7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq%2BB6QDtuetcaBPnW6%2BO7wDHpIiK9SaVK5GgV543tzjgGcghAgAh%2BQQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK%2B%2BG%2Bw48edZPK%2BM6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE%2BG%2BcD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm%2BFNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk%2BaV%2BoJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0%2FVNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc%2BXiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30%2FiI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE%2FjiuL04RGEBgwWhShRgQExHBAAh%2BQQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR%2BipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY%2BYip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd%2BMFCN6HAAIKgNggY0KtEBAAh%2BQQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1%2BvsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d%2BjYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg%2BygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0%2Bbm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h%2BKr0SJ8MFihpNbx%2B4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX%2BBP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA%3D%3D ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/gif;base64,R0lGODlhIAAgAPMAAJmZmf%2F%2F%2F6%2Bvr8nJybW1tcDAwOjo6Nvb26ioqKOjo7Ozs%2FLy8vz8%2FAAAAAAAAAAAACH%2FC05FVFNDQVBFMi4wAwEAAAAh%2FhpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh%2BQQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ%2FV%2FnmOM82XiHRLYKhKP1oZmADdEAAAh%2BQQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY%2FCZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB%2BA4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6%2BHo7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq%2BB6QDtuetcaBPnW6%2BO7wDHpIiK9SaVK5GgV543tzjgGcghAgAh%2BQQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK%2B%2BG%2Bw48edZPK%2BM6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE%2BG%2BcD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm%2BFNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk%2BaV%2BoJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0%2FVNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc%2BXiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30%2FiI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE%2FjiuL04RGEBgwWhShRgQExHBAAh%2BQQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR%2BipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY%2BYip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd%2BMFCN6HAAIKgNggY0KtEBAAh%2BQQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1%2BvsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d%2BjYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg%2BygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0%2Bbm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h%2BKr0SJ8MFihpNbx%2B4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX%2BBP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA%3D%3D";

/***/ }),

/***/ "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuODU0IDIuODU0YS41LjUgMCAwIDAtLjcwOC0uNzA4TDcuNSA2Ljc5MyAyLjg1NCAyLjE0NmEuNS41IDAgMSAwLS43MDguNzA4TDYuNzkzIDcuNWwtNC42NDcgNC42NDZhLjUuNSAwIDAgMCAuNzA4LjcwOEw3LjUgOC4yMDdsNC42NDYgNC42NDdhLjUuNSAwIDAgMCAuNzA4LS43MDhMOC4yMDcgNy41bDQuNjQ3LTQuNjQ2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuODU0IDIuODU0YS41LjUgMCAwIDAtLjcwOC0uNzA4TDcuNSA2Ljc5MyAyLjg1NCAyLjE0NmEuNS41IDAgMSAwLS43MDguNzA4TDYuNzkzIDcuNWwtNC42NDcgNC42NDZhLjUuNSAwIDAgMCAuNzA4LjcwOEw3LjUgOC4yMDdsNC42NDYgNC42NDdhLjUuNSAwIDAgMCAuNzA4LS43MDhMOC4yMDcgNy41bDQuNjQ3LTQuNjQ2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+ ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuODU0IDIuODU0YS41LjUgMCAwIDAtLjcwOC0uNzA4TDcuNSA2Ljc5MyAyLjg1NCAyLjE0NmEuNS41IDAgMSAwLS43MDguNzA4TDYuNzkzIDcuNWwtNC42NDcgNC42NDZhLjUuNSAwIDAgMCAuNzA4LjcwOEw3LjUgOC4yMDdsNC42NDYgNC42NDdhLjUuNSAwIDAgMCAuNzA4LS43MDhMOC4yMDcgNy41bDQuNjQ3LTQuNjQ2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+";

/***/ }),

/***/ "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMyAyYTEgMSAwIDAgMC0xIDF2OWExIDEgMCAwIDAgMSAxaDlhMSAxIDAgMCAwIDEtMVY4LjVhLjUuNSAwIDAgMC0xIDBWMTJIM1YzaDMuNWEuNS41IDAgMCAwIDAtMUgzWm05Ljg1NC4xNDZhLjUuNSAwIDAgMSAuMTQ2LjM1MVY1LjVhLjUuNSAwIDAgMS0xIDBWMy43MDdMNi44NTQgOC44NTRhLjUuNSAwIDEgMS0uNzA4LS43MDhMMTEuMjkzIDNIOS41YS41LjUgMCAwIDEgMC0xaDNhLjQ5OS40OTkgMCAwIDEgLjM1NC4xNDZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMyAyYTEgMSAwIDAgMC0xIDF2OWExIDEgMCAwIDAgMSAxaDlhMSAxIDAgMCAwIDEtMVY4LjVhLjUuNSAwIDAgMC0xIDBWMTJIM1YzaDMuNWEuNS41IDAgMCAwIDAtMUgzWm05Ljg1NC4xNDZhLjUuNSAwIDAgMSAuMTQ2LjM1MVY1LjVhLjUuNSAwIDAgMS0xIDBWMy43MDdMNi44NTQgOC44NTRhLjUuNSAwIDEgMS0uNzA4LS43MDhMMTEuMjkzIDNIOS41YS41LjUgMCAwIDEgMC0xaDNhLjQ5OS40OTkgMCAwIDEgLjM1NC4xNDZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4= ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMyAyYTEgMSAwIDAgMC0xIDF2OWExIDEgMCAwIDAgMSAxaDlhMSAxIDAgMCAwIDEtMVY4LjVhLjUuNSAwIDAgMC0xIDBWMTJIM1YzaDMuNWEuNS41IDAgMCAwIDAtMUgzWm05Ljg1NC4xNDZhLjUuNSAwIDAgMSAuMTQ2LjM1MVY1LjVhLjUuNSAwIDAgMS0xIDBWMy43MDdMNi44NTQgOC44NTRhLjUuNSAwIDEgMS0uNzA4LS43MDhMMTEuMjkzIDNIOS41YS41LjUgMCAwIDEgMC0xaDNhLjQ5OS40OTkgMCAwIDEgLjM1NC4xNDZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=";

/***/ })

}]);
//# sourceMappingURL=lib_index_js-data_image_gif_base64_R0lGODlhIAAgAPMAAJmZmf_2F_2F_2F6_2Bvr8nJybW1tcDAwOjo6Nvb26-baaebe.d0ae3f6ff7c5fb4e87d0.js.map