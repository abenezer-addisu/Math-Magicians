<<<<<<< HEAD
import operate from './operate';

it('adds two numbers', () => {
  expect(operate(1, 2, '+')).toBe('3');
});

it('subtracts two numbers', () => {
  expect(operate(1, 2, '-')).toBe('-1');
});

it('multiplies two numbers', () => {
  expect(operate(1, 2, 'x')).toBe('2');
});

it('divides two numbers', () => {
  expect(operate(1, 2, '÷')).toBe('0.5');
});

it('modulos two numbers', () => {
  expect(operate(1, 2, '%')).toBe('1');
=======
import renderer from 'react-test-renderer';
import Quotes from '../components/Quotes';

it('Qoute page is working', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
>>>>>>> 63de86e52a105fa2080730c2bba8c83dd72c2020
});
