
function check() {
    let input = document.querySelector('input').value.trim().toLowerCase()
    if (input === 'january') {
        preview.innerHTML = 'January- 31 days'
    }else if (input === 'february') {
        preview.innerHTML = 'February- 28/29 days'
    }else if (input === 'march') {
        preview.innerHTML = 'March - 31 days'
    }else if (input === 'april') {
        preview.innerHTML = 'April- 30 days'
    }else if (input === 'may') {
        preview.innerHTML = 'May- 31 days'
    }else if (input === 'june') {
        preview.innerHTML = 'June- 30 days'
    }else if (input === 'july') {
        preview.innerHTML = 'July 31days'
    }else if (input === 'august') {
        preview.innerHTML = 'August 31 days'
    }else if (input === 'september') {
        preview.innerHTML = 'September 30 days'
    }else if (input === 'october') {
        preview.innerHTML = 'October 31 days'
    }else if (input === 'november') {
        preview.innerHTML = 'November- 30 days'
    }else if (input === 'december') {
        preview.innerHTML = 'December- 31 days'
    }

    document.querySelector('input').value = ''
}