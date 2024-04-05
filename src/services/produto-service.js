import service from './service';

// C
function adicionar(produto) {
    return new Promise((resolve, reject) => {
        service.post('/produtos', produto)
            .then(response => resolve(response))
            .catch(erro => reject(erro))
    });
}

// R
function obterTodos() {
    return new Promise((resolve, reject) => {
        service.get('/produtos')
            .then(response => resolve(response))
            .catch(erro => reject(erro))
    });
}

function obterPorId(id) {
    return new Promise((resolve, reject) => {
        service.get(`/produtos/${id}`)
            .then(response => resolve(response))
            .catch(erro => reject(erro))
    });
}

// U
function atualizar(produto) {
    return new Promise((resolve, reject) => {
        service.put(`/produtos/${produto.id}`, produto)
            .then(response => resolve(response))
            .catch(erro => reject(erro))
    });
}

// D
function excluir(id) {
    return new Promise((resolve, reject) => {
        service.delete(`/produtos/${id}`)
            .then(response => resolve(response))
            .catch(erro => reject(erro))
    });
}

export default {
    adicionar,
    obterTodos,
    obterPorId,
    atualizar,
    excluir
}