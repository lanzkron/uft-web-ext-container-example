function get_property_value(name) {
    switch (name) {
	case 'logical_name':
		return _elem.id.replace(/-form$/, '');
	}
}