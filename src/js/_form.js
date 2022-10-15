export const formFunction = () => {
    const forms = document.querySelectorAll('.form')
    forms.forEach(form => {

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const modal = document.querySelector('.graph-modal')
            const modalContainer = document.querySelector('.graph-modal__container')
            const body = document.querySelector('.body')
            const closeBtn = document.querySelector('.graph-modal__close')
            const modalBox = document.querySelector('.graph-modal__box');

            open = () => {
                modalContainer.scrollTo(0, 0)
                modal.classList.add('is-open');
                body.style.scrollBehavior = 'auto';
                body.classList.add('disable-scroll');
                document.documentElement.style.scrollBehavior = 'auto';
                modalContainer.classList.add('graph-modal-open');
            }

            close = () => {
                modalContainer.classList.remove('animate-open');
                modal.classList.remove('is-open');
                modalContainer.classList.remove('graph-modal-open');
                body.classList.remove('disable-scroll');
                document.body.style.scrollBehavior = 'auto';
                document.documentElement.style.scrollBehavior = 'auto';
            }

            open()
            closeBtn.addEventListener('click', () => { close() })

            document.addEventListener('mousedown', (e) => {
                if (!modalBox.contains(e.target)) {
                    close()
                }
            });
        })
    })
}