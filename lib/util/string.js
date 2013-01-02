module.exports = {

    encodeHTML: function (str) {
	return str.toString().replace(/&/g, '&amp;')
               .replace(/</g, '&lt;')
               .replace(/>/g, '&gt;')
               .replace(/"/g, '&quot;');
    }

};