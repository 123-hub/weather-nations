

function inputvalidation(cityvalue) {
    if (cityvalue == "") {

        
        return false;
    }
        
    if (/^[A-Za-z]$/g.test(cityvalue)) {
        
        
        return false;
    }
    else
    return true;
}

export default inputvalidation
