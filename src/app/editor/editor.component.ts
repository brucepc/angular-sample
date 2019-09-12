import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass']
})
export class EditorComponent implements OnInit {
  @ViewChild('ckeditor', { static: false })
  private ckeditor: CKEditorComponent;
  public editor = ClassicEditor;

  constructor(
  ) { }

  ngOnInit() {
  }

  clique(ckeditor: CKEditorComponent) {
    // ckeditor.editorInstance.execute('insertContent', 'OK')
    // ckeditor.editorInstance.model.document.insetText('text', position);
    // console.log(position);
    ckeditor.editorInstance.model.change(writer => {
      const position = this.ckeditor.editorInstance.model.document.selection.getFirstPosition();
      writer.insertText('example', position);
    });

    // console.log(ckeditor.editor.model.document.selection);
    // console.log(this.editor.model.document.selection);
  }
}
