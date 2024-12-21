const createTabs = () => {
    const tabs = document.getElementById('tabs');

tabs.innerHTML = `
        <ul class="nav nav-tabs d-flex justify-content-center">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/add">Add</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/search">Search</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/edit">Edit</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/delete">Delete</a>
            </li>
        </ul>
    `;
}

createTabs();