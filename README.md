# React steps

This component basically introduces an approach to rendering a sequence of components (steps) and collecting the data each component submits. The main idea is that each of "step" components does not know of any others.

This is useful for step forms, sequenced flows, etc.

## Install

```bash
$ npm i @madappgang/react-steps
```

## Usage

```javascript
import Steps from '@madappgang/react-steps';

const OnboardingForm = function () {
  const handleStepsCompletion = function (results) {
    console.log(results); // [1, 2, 3]
  };

  return (
    <Steps onComplete={handleStepsCompletion}>
      <FirstStep data={1} />
      <SecondStep data={2} />
      <ThirdStep data={3} />
    </Steps>
  );
};
```

Each step component will be assigned a set of special props that can be used inside them. Here's the list of those props:

| Property | Type | Description
| --- | --- | --- |
| done | function | Should be called when it's time to transition to the next step. Any data can be passed as an argument. This data will then be collected and passed to `onComplete` callback of the steps container |
| goBack | function | Should be called to go a step back. No arguments expected |

Once the last steps submits it's completion the `onComplete` function will be called on the steps component.
As a first argument there is going to be an array containing the data that was submitted by each of the steps. Just take a closer look at the code example up above.

## Build

Install dependencies
```bash
$ npm i
```

Run tests
```bash
$ npm run test
```

Build
```
$ npm run build
```

The output will appear in the `dist` folder in the project's root.

## License
MIT