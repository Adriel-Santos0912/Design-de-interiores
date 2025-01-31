function btnAddNormal(){
    const add = document.createElement('section');
    add.className.add = 'section2';
    
    const container = document.createElement('div');
    container.className.add = 'container2';

    add.appendChild(container);

    const article = document.createElement('article');
    const positionElements = document.createElement('div');
    positionElements.className.add = 'positionElements';

    container.appendChild(article);

    const positionImg = document.createElement('div');
    positionImg.className.add = 'positionImg';
    positionImg.className.add = 'area-1';

    const positionDescricao = document.createElement('div');
    positionDescricao.className.add = 'positionDescricao';

    positionElements.appendChild(positionImg);
    positionElements.appendChild(positionDescricao);

    const img = document.createElement('div');
    img.className.add = 'imagem1';

    positionImg.appendChild(img);

    const descricao = document.createElement('div');
    descricao.className.add = 'descricao';
    descricao.className.add = 'area-2';

    positionDescricao.appendChild(descricao);

    const title = document.createElement('div');
    title.className.add = 'title';
    
    const text = document.createElement('div');
    text.className.add = 'text';

    const button = document.createElement('div');
    button.className.add = 'button';

    descricao.appendChild(title);
    descricao.appendChild(text);
    descricao.appendChild(button);

    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const link = document.createElement('a');
    link.href = 'contact.html';
    const btn = document.createElement('button');
    btn.className.add = 'btn';
    btn.className.add = 'btn-dark';
    btn.className.add = 'btn-lg';
    btn.textContent = 'Contate-nos';

    title.appendChild(h1);
    text.appendChild(p);
    button.appendChild(link);
    link.appendChild(btn);

}
