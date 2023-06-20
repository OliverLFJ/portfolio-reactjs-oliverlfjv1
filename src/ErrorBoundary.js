import React from 'react';
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Actualiza el state para que el siguiente renderizado muestre la interfaz de usuario de repuesto
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Puedes también registrar el error en un servicio de reporte de errores
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Puedes renderizar cualquier interfaz de usuario de repuesto
            return <h1>Oops! Algo salió mal.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary
