import styled from "@emotion/styled";

const EstiloError = styled.p`
    
    color: black;
    font-size: 1.5rem;
`;

const Error = ({mensaje}) => {
    return ( 

        <EstiloError className="my-3 p-4 text-center alert alert-primary">{mensaje}</EstiloError>

    );
}
 
export default Error;