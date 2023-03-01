sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("josecarlosgz.sapui5.controller.App", {
            onInit: function () {
                // var oModel = new sap.ui.model.json.JSONModel();
                // oModel.loadData("./model/almacenFrutas.json");
                // oModel.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
                // this.getView().setModel(oModel, "myJsonModel");
                var oTextArea = this.byId("myTextArea");
                var data = this.getOwnerComponent().getModel("myJsonModel").getData();
                var formattedData = this.formatJson(data);
                oTextArea.setValue(formattedData);
                /*Para forzar el rerenderizado de cualquier control SAPUI5 no solo de un sap.m.TextArea, lo podemos hacer con el método rerender()
                https://sapui5.hana.ondemand.com/sdk/#/api/sap.ui.core.Element%23methods/Summary
                */
                oTextArea.rerender();
            },
            formatJson: function(jsonData) {
                return JSON.stringify(jsonData, null, 4); //Donde el 4 son los espacios con los que cuenta cada tabulación
            },
            onChange: function() {
                var oTextArea = this.byId("myTextArea");
                var data = this.getView().getModel("myJsonModel").getData();
                var formattedData = this.formatJson(data);
                oTextArea.setValue(formattedData);
                /*Para forzar el rerenderizado de cualquier control SAPUI5 no solo de un sap.m.TextArea, lo podemos hacer con el método rerender()
                https://sapui5.hana.ondemand.com/sdk/#/api/sap.ui.core.Element%23methods/Summary
                */
                oTextArea.rerender();
            }
        });
    });
