document.addEventListener('DOMContentLoaded', () => {
    // --- 1. CV Modal Logic ---
    const cvModal = document.getElementById('cvModal');
    const openCvBtn = document.getElementById('openCvModal');
    const closeCvBtn = document.getElementById('closeCvModal');

    if (openCvBtn && cvModal && closeCvBtn) {
        openCvBtn.addEventListener('click', () => {
            cvModal.style.display = 'flex';
        });

        closeCvBtn.addEventListener('click', () => {
            cvModal.style.display = 'none';
        });
    }

    // --- 2. Contact Modal Logic ---
    const contactModal = document.getElementById('contactModal');
    const openContactBtn = document.getElementById('openContactModal');
    const closeContactBtn = contactModal ? contactModal.querySelector('.close-btn') : null;

    if (openContactBtn && contactModal) {
        openContactBtn.addEventListener('click', () => {
            contactModal.style.display = 'flex';
        });
    }

    if (closeContactBtn && contactModal) {
        closeContactBtn.addEventListener('click', () => {
            contactModal.style.display = 'none';
        });
    }

    // --- 3. Outside Click Handler for Both Modals ---
    window.addEventListener('click', (event) => {
        if (cvModal && event.target === cvModal) {
            cvModal.style.display = 'none';
        }
        if (contactModal && event.target === contactModal) {
            contactModal.style.display = 'none';
        }
    });
});
