import {describe, expect, it} from 'vitest';
import {render} from '@testing-library/react'
import { formatMoney } from './Money';
import Product from './Product';
import { renderMatches } from 'react-router-dom';

describe('Product component test',()=>{
it('displays the product details correctly',()=>{
render(<Product />);
});
});