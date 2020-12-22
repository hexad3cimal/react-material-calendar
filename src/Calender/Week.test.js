import React from 'react';
import { mount } from 'enzyme';
import Week from './Week';

describe('Week component test', () => {
    let  wrapper;

    beforeEach(() => {
        const rows = [[ {date : "", selected : false} , {date : "", selected : false} ,{date : "", selected : false} 
        ,{date : '12-12-2019',selected:true},{date : '12-13-2019',selected:false}]]
        wrapper = mount(<Week rows = {rows} onClick = {()=>{}} />);
    })
   it('renders container', () => {
        expect(wrapper.find('Day').length).toBe(5);
        expect(wrapper.find('Day').at(3).text()).toBe('12-12-2019');
    });
})