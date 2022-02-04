export default {
    mounted(el, bindings){
        // console.log(bindings);

        const options = {
            rootMargin: '0px',
            threshold: 1
        }

        const callback = (entries, observer) => { 
            if(entries[0]['isIntersecting']) {
                bindings['value'](bindings.arg);
            }
        }

        const observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    },
    name: 'intersection'
}