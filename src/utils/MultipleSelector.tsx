import './MultipleSelector.css';

export default function MultipleSelector(props: multipleSelectorProps){

    function select(item: selectorMultipleModel){
        const selected = [...props.selected, item];
        const notSelected = props.notSelected.filter(valor => valor !== item);
        props.onChange(selected, notSelected);
    }

    function deselect(item: selectorMultipleModel){
        const selected = props.selected.filter(valor => valor !== item);
        const noSelected = [...props.notSelected, item];
        props.onChange(selected, noSelected);
    }

    function selectAll(){
        const selected = [...props.selected, ...props.notSelected];
        const noSelected: selectorMultipleModel[] = [];
        props.onChange(selected, noSelected);
    }

    function deselectAll(){
        const noSelected = [...props.notSelected, ...props.selected];
        const selected: selectorMultipleModel[] = [];
        props.onChange(selected, noSelected);
    }

    return (
        <div className="selector-multiple">
            <ul>
                {props.notSelected.map(item => 
                    <li key={item.key} onClick={() => select(item)}>{item.value}</li>)}
            </ul>
            <div className="selector-multiple-btn">
                    <button type="button" onClick={selectAll}>{'>>'}</button>
                    <button type="button" onClick={deselectAll}>{'<<'}</button>
            </div>
            <ul>
                {props.selected.map(item => 
                    <li key={item.key} onClick={() => deselect(item)}>{item.value}</li>)}
            </ul>
        </div>
    )
}

interface multipleSelectorProps{
    selected: selectorMultipleModel[];
    notSelected: selectorMultipleModel[];
    onChange(selected: selectorMultipleModel[], 
        notSelected: selectorMultipleModel[]): void
}

export interface selectorMultipleModel{
    key: number;
    value: string;
}