import React from 'react';
import {shallow} from 'enzyme';
import Input from './Input';

describe('<Input/>', () => {
    let wrapper;
    let props = {
        elementType: 'input',
        elementConfig: {
            type: 'email',
            label: 'Email',
            placeholder: 'Enter email'
        },
        value: '',
        validation: {
            required: true,
            isEmail: true
        },
        valid: false,
        touched: false
    };
    beforeEach(() => {
        wrapper = shallow(<Input {...props}/>);
    });

    it('Will render without error', () => {
        expect(wrapper).not.toEqual(null);
    });

    it('Will have invalid class when props.invalid and props.touched', () => {
        wrapper.setProps({invalid: true, touched: true});
        const classes = wrapper.find('input').prop('className');
        expect(classes).toContain('invalid');
    });

    it('Will NOT have invalid class when NOT props.invalid and props.touched', () => {
        wrapper.setProps({invalid: false, touched: true});
        const classes = wrapper.find('input').prop('className');
        expect(classes).not.toContain('invalid');
    });

    it('Will render input when props.elementType is input', () => {
        expect(wrapper.find('input').length).toEqual(1);
        expect(wrapper.find('textarea').length).toEqual(0);
        expect(wrapper.find('select').length).toEqual(0);
    });

    it('Will render textarea when props.elementType is textarea', () => {
        wrapper.setProps({elementType: 'textarea'});
        expect(wrapper.find('textarea').length).toEqual(1);
        expect(wrapper.find('input').length).toEqual(0);
        expect(wrapper.find('select').length).toEqual(0);
    });

    it('Will render select with option(s) when props.elementType is select', () => {
        const options = [{
            key: 'key',
            value: 'value',
            displayValue: 'name'
        }
        ];
        wrapper.setProps({
            elementType: 'select',
            elementConfig: {
                options: options
            }
        });
        expect(wrapper.find('select').length).toEqual(1);
        expect(wrapper.find('textarea').length).toEqual(0);
        expect(wrapper.find('input').length).toEqual(0);
        expect(wrapper.find('option').length).not.toEqual(0);
    });

    it('Will render input when props.elementType does not have a match', () => {
        wrapper.setProps({
            elementType: 'checkbox'
        });

        expect(wrapper.find('input').length).toEqual(1);
        expect(wrapper.find('textarea').length).toEqual(0);
        expect(wrapper.find('select').length).toEqual(0);
    });

    it('Will render 1 label', () => {
        expect(wrapper.find('label').length).toEqual(1);
    });

    it('Will render small when props.invalid and props.touched', () => {
        const style = {style: {display: 'block'}};
        wrapper.setProps({invalid: true, touched: true});
        expect(wrapper.find('small').find(style).length).toEqual(1);
    });

    it('Will NOT render small when NOT props.invalid and props.touched', () => {
        const style = {style: {display: 'none'}};
        wrapper.setProps({invalid: false, touched: true});
        expect(wrapper.find('small').find(style).length).toEqual(1);
    });
});