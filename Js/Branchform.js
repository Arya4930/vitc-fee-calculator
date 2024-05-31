document.addEventListener('DOMContentLoaded', function () {
    const BranchForm = document.getElementById('BranchForm');
    BranchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const Branch = document.getElementById('branch').value;

        if (Branch == 'vellore') {
            window.location.href = "./branches/vellore.html"
        } else if (Branch == 'chennai') {
            window.location.href = "./branches/chennai.html"
        }
    });
});