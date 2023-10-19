import React, { useMemo, useState } from 'react';
import { styled } from 'styled-components';
import bg from './assets/img/bg.jpg';
import Exercise from './components/exercise/Exercise';
import Dashboard from './components/dashboard/Dashboard';
import ExerciseData from './components/exercise/ExerciseData';
import Measurement from './components/measurement/Measurement';
import Navigation from './components/navigation/Navigation';
import Orb from './components/orb/Orb';
import Weight from './components/weight/Weight';
import { useAppContext } from './context/appContext';
import { MainLayout } from './styles/Layouts';
import Target from './components/target/Target';
import ImageUpload from './components/image/ImageUpload';

const App = () => {

  const [active, setActive] = useState(1);

  const appContext = useAppContext();

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Exercise />
      case 3:
        return <ExerciseData />
      case 4:
        return <Measurement />
      case 5:
        return <Weight />
      case 6:
        return <Target />
      // case 7:
      //   return <ImageUpload />
      default:
        return <Dashboard />
    };
  };

  const orbMemory = useMemo(() => {
    return (
      <Orb />
    );
  }, []);

  return (
    <AppStyled bg={bg} className='App'>
      {orbMemory}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
};

const AppStyled = styled.div`
  height: 100vh;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 0, 0.5),
    rgba(0, 0, 255, 0.5)
  ), url(${props => props.bg});
  position: relative;

  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #fff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
