# 🧬 Self-Parking Car Evolution

Training the car to do self-parking using a genetic algorithm.

This is an experimental project with the aim to learn the basics of how [genetic algorithm](https://en.wikipedia.org/wiki/Genetic_algorithm) works by teaching the cars to do the self-parking. The evolution process is happening directly in the browser.

**At the beginning of the evolution** the generation of cars has random genomes which make them behave something like this:

![Self-parking cars at the beginning of the evolution](./public/01-cars-before-01.gif)

**On the 40th generation** the cars start learning what the self-parking is and start getting closer to the parking spot (although hitting the other cars along the way):

![Self-parking car in ](./public/02-car-after-01.gif)

Another example with a bit more challenging starting point:

![Self-parking car in ](./public/02-car-after-03.gif)

## Genetic Source-Code

The `≈92%` of the code in this repository relates to the UI logic (3D simulation of the cars world, form controls for the evolution training process, etc.).

## Development Details

The project is a [React](https://create-react-app.dev/) application written on TypeScript. Styled with [BaseWeb](https://baseweb.design/).

The 3D world simulation is made with [Three.js](https://threejs.org/) library using [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) wrapper. The physics is simulated with [Cannon.js](https://github.com/schteppe/cannon.js) using [cannon-es](https://github.com/pmndrs/cannon-es) wrapper.

The whole evolution simulation is happening directly in the browser.

To launch the project, fork/clone it and run the following commands:

```shell
npm install
npm run start
```

The website will be available on `http://localhost:3000/self-parking-car-evolution`.

**Hints:**

- Use the `?debug=true` URL param to see the FPS performance monitor and debugging logs in the console (i.e. `http://localhost:3000/self-parking-car-evolution?debug=true`).
- Training progress is being saved to the local storage for each generation (not for each batch/group).
