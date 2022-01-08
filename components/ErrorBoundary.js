import React from 'react';
import styled from 'styled-components';
// styled
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    padding-top: 50px;
    color: #fa274b;
    font-size: 30px;
    text-align: center;
`;

class ErrorBoundary extends React.Component {
    state = { hasError: false, error: null };
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error,
        };
    }
    render() {
        if (this.state.hasError) {
            return (
                <Container>
                    <p>Sorry, error: "{this.state.error.message}"</p>
                    <p>We will fix it soon...</p>
                </Container>
            )
        }
        return this.props.children;
    }
}
export default ErrorBoundary;