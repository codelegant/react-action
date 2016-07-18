/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/18 15:49
 */
import React from 'react';
import FilterLink from '../containers/FilterLink';
import { todoFilters } from '../actions/index';

const Footer=()=>(
  <p>
    Show:
    {" "}
    <FilterLink filter={todoFilters.SHOW_ALL}>
      All
    </FilterLink>
    {", "}
    <FilterLink filter={todoFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    {", "}
    <FilterLink filter={todoFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
);

export default Footer;
