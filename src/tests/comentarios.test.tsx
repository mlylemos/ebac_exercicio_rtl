import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'
import '@testing-library/jest-dom'

describe('Teste de inserção de comentários', () => {
    test('deve permitir inserir dois comentários', () => {
        render(<App />)

        const inputComentario = screen.getByTestId('input-comentario')
        const botaoEnviar = screen.getByTestId('botao-enviar')

        fireEvent.change(inputComentario, { target: { value: 'Primeiro comentário' } })
        fireEvent.click(botaoEnviar)

        fireEvent.change(inputComentario, { target: { value: 'Segundo comentário' } })
        fireEvent.click(botaoEnviar)

        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument()
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument()
    })
})
