# Raw Evaluation Data and Conversion Script for [Ubi-Interact](https://github.com/SandroWeber/ubi-interact) [Physical Embodiment](https://eprints.eudl.eu/id/eprint/4817/1/eai.14-7-2021.170291.pdf#subsection.7.6)

This repository contains the [evaluation JSON files](2022-05-12) that were recorded using [ubi-web-evaluation](https://github.com/goldst/ubii-web-evaluation) on [ubii-vr-physics-embodiment-babylonjs (W)](https://github.com/SandroWeber/ubii-vr-physics-embodiment-babylonjs) and [ubii-vr-physics-embodiment-unity (U)](https://github.com/SandroWeber/ubii-vr-physics-embodiment-unity). Both projects contain 3 stages that can be enabled and disabled. The evaluation data contains roughly 10 second long recordings of any possible combination of stages from these implementations. Furthermore, there is evaluation data for the WWW configuration in Firefox and the WWW configuration using additional physical constraints.

## Conversion script
Because the JSON files are barely readable by human eye, a conversion script `convert-to-csv.js` is included, which saves data for specific targets and specific axes in CSV format. The columns in the created files are:

| Time in ms since first received data | Value for A (may be empty) | Value for B (may be empty) |
|--|--|--|

It is sorted by the first column.

Follow the instructions in [`convert-to-csv.js`](convert-to-csv.js) for info.

## License
[MIT](LICENSE)