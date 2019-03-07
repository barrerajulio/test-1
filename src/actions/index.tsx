import { IRecordRegister } from '../interfaces/record.register';

export const ADD_REGISTER = 'ADD_REGISTER';
export const REQUEST_REGISTERS = 'REQUEST_REGISTERS'
export const RETRIEVE_REGISTERS = 'RETRIEVE_REGISTERS'

export const addRegister = (register: IRecordRegister) => ({type: ADD_REGISTER, register});
export const requestRegisters = () => ({type: REQUEST_REGISTERS, requestedAt: new Date()})
export const retrievedRegisters = () => ({type: RETRIEVE_REGISTERS, retrievedAt: new Date()})
export const fetchRegisters = () => async (dispatch: any) => {
    const response: IRecordRegister[] = [
        {
          country: 'México',
          name: 'Chuck',
          phone: '11576894838',
          email: 'chuck@email.com'
        },
        {
          country: 'Argentina',
          name: 'Marta',
          phone: '23234234234',
          email: 'marta@email.com'
        }
    ];      
    dispatch(requestRegisters());
    response.forEach((item) => dispatch(addRegister(item)));
    dispatch(retrievedRegisters());
};
