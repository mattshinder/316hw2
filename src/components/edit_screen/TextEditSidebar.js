import React, { Component } from 'react'
import { Range, Modal, Button } from 'react-materialize'
import TextInput from 'react-materialize/lib/TextInput';

class TextEditSidebar extends Component {
    constructor(props) {
        super(props);

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            text: this.props.logo.text,
            borderStyle: this.props.logo.borderStyle,
            textColor : this.props.logo.textColor,
            fontSize : this.props.logo.fontSize,
            backgroundColor: this.props.logo.backgroundColor,
            borderColor: this.props.logo.borderColor,
            borderRadius: this.props.logo.borderRadius,
            borderWidth: this.props.logo.borderWidth,
            padding: this.props.logo.padding,
            margin: this.props.logo.margin
        }
    }

    handleUndo = () => {
        this.props.undoCallback();
    }
    handleRedo = () => {
        this.props.redoCallback();
    }

    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ textColor: event.target.value }, this.completeUserEditing);
    }

    handleFontSizeChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ fontSize: event.target.value }, this.completeUserEditing);
    }

    handleBackgroundColorChange = (event) => {
        console.log("handleBackgroundColorChangeComplete to " + event.target.value);
        this.setState({ backgroundColor: event.target.value }, this.completeUserEditing);
    }

    handleBorderColorChange = (event) => {
        console.log("handleBorderColorChangeComplete to " + event.target.value);
        this.setState({ borderColor: event.target.value }, this.completeUserEditing);
    }

    handleBorderRadiusChange = (event) => {
        console.log("handleBorderRadiusChangeComplete to " + event.target.value);
        this.setState({ borderRadius: event.target.value }, this.completeUserEditing);
    }

    handleBorderThicknessChange = (event) => {
        console.log("handleBorderThicknessChangeComplete to " + event.target.value);
        this.setState({ borderWidth: event.target.value }, this.completeUserEditing);
    }
    
    handlePaddingChange = (event) => {
        console.log("handlePaddingChangeComplete to " + event.target.value);
        this.setState({ padding: event.target.value }, this.completeUserEditing);
    }

    handleMarginChange = (event) => {
        console.log("handleMarginChangeComplete to " + event.target.value);
        this.setState({ margin: event.target.value }, this.completeUserEditing);
    }
    handleChange = (event) => {
        console.log("handleTextChange to " + event.target.value);
        console.log(event.target.value);
        this.setState({ text: event.target.value }, this.completeUserEditing);
    }

    completeUserEditing = () => {
        console.log("completeUserEditing");
        console.log("this.state.textColor: " + this.state.textColor);
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.state.text, this.state.textColor, this.state.fontSize, this.state.backgroundColor,
            this.state.borderColor, this.state.borderRadius, this.state.borderWidth, this.state.padding, this.state.margin, this.state.borderStyle);
    }
 // <button className="waves-effect waves-light btn-small">&#9998;</button>
    render() {
        let undoDisabled = !this.props.canUndo();
        let undoClass = "waves-effect waves-light btn-small";
        let redoDisabled = !this.props.canRedo();
        let redoClass = "waves-effect waves-light btn-small";
        if (redoDisabled)
            redoClass += "disabled";
        if (undoDisabled)
            undoClass += " disabled";
        return (
            <div className="card-panel col s4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <Modal
                        actions={[
                            <Button flat modal="close" node="button" waves="green">Close</Button>
                        ]}
  bottomSheet={false}
  fixedFooter={false}
  header="Change Text"
  id="modal-0"
  options={{
    dismissible: true,
    endingTop: '10%',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    opacity: 0.5,
    outDuration: 250,
    preventScrolling: true,
    startingTop: '4%'
  }}
  trigger={<Button node="button">&#9998;</Button>}
>
    <TextInput placeholder type="string" value={this.props.logo.text} onChange={this.handleChange}></TextInput>
</Modal>
                        <button className={undoClass} onClick={this.handleUndo}>Undo</button>
                        <button className={redoClass} onClick={this.handleRedo}>Redo</button>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Text</span>
                        <div className="row">
                            <div className="col s4">Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleTextColorChange}
                                        value={this.props.logo.textColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <Range min="4" max="144"
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Background Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBackgroundColorChange}
                                        value={this.props.logo.backgroundColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBorderColorChange}
                                        value={this.props.logo.borderColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Radius:</div>
                            <div className="col s8">
                                <Range min="4" max="144"
                                    onChange={this.handleBorderRadiusChange}
                                    value={this.props.logo.borderRadius} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Thickness:</div>
                            <div className="col s8">
                                <Range min="4" max="144" 
                                    onChange={this.handleBorderThicknessChange}
                                    value={this.props.logo.borderWidth} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Paddings:</div>
                            <div className="col s8">
                                <Range min="4" max="144" 
                                    onChange={this.handlePaddingChange}
                                    value={this.props.logo.padding} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Margin:</div>
                            <div className="col s8">
                                <Range min="4" max="144" 
                                    onChange={this.handleMarginChange}
                                    value={this.props.logo.margin} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditSidebar