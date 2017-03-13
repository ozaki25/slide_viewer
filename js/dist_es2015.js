(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

+(function ($) {
    var SlideViewer = (function () {
        function SlideViewer(element) {
            _classCallCheck(this, SlideViewer);

            this.$element = $(element);
            this.$slides = this.$element.children('.slide-image');
            this.current = 0;

            this.showToolbar();
            this.change();
        }

        _createClass(SlideViewer, [{
            key: 'showToolbar',
            value: function showToolbar() {
                var toolbar = $('<div>').addClass('toolbar');
                var pager = this.getPagerHtml();
                this.$prev = this.getChangeSlideIconHtml('prev');
                this.$next = this.getChangeSlideIconHtml('next');
                toolbar.append(this.$prev).append(pager).append(this.$next);
                this.$element.append(toolbar);
            }
        }, {
            key: 'getPagerHtml',
            value: function getPagerHtml() {
                var pager = $('<div>').addClass('slide-pager');
                this.$currentPage = $('<span>').addClass('current-page');
                this.$totalPage = $('<span>').addClass('total-page');
                return pager.append(this.$currentPage).append(' / ').append(this.$totalPage);
            }
        }, {
            key: 'getChangeSlideIconHtml',
            value: function getChangeSlideIconHtml(direction) {
                var div = $('<div>').addClass('change-slide').addClass(direction).data('direction', direction);
                var icon = $('<span>').addClass(this.getIconClass(direction));
                return div.append(icon);
            }
        }, {
            key: 'getIconClass',
            value: function getIconClass(direction) {
                return direction === 'prev' ? 'glyphicon glyphicon-chevron-left' : direction === 'next' ? 'glyphicon glyphicon-chevron-right' : '';
            }
        }, {
            key: 'change',
            value: function change(direction) {
                var next = this.getNextSlideNum(direction);
                if (this.isOutOfRange(next)) return;

                this.current = next;
                this.reset();
                this.showSlide();
                this.startOrEndDisabled();
                this.changePageNum();
            }
        }, {
            key: 'getNextSlideNum',
            value: function getNextSlideNum(direction) {
                return direction === 'prev' ? this.current - 1 : direction === 'next' ? this.current + 1 : this.current;
            }
        }, {
            key: 'isOutOfRange',
            value: function isOutOfRange(num) {
                return num < 0 || this.$slides.length <= num;
            }
        }, {
            key: 'reset',
            value: function reset() {
                this.$slides.hide().removeClass('active');
                this.$prev.removeClass('disabled');
                this.$next.removeClass('disabled');
            }
        }, {
            key: 'showSlide',
            value: function showSlide() {
                var $slide = $(this.$slides.get(this.current));
                $slide.show().addClass('active');
            }
        }, {
            key: 'startOrEndDisabled',
            value: function startOrEndDisabled() {
                if (this.current === 0) this.$prev.addClass('disabled');
                if (this.current === this.$slides.length - 1) this.$next.addClass('disabled');
            }
        }, {
            key: 'changePageNum',
            value: function changePageNum() {
                this.$currentPage.text(this.current + 1);
                this.$totalPage.text(this.$slides.length);
            }
        }], [{
            key: 'jQueryInterface',
            value: function jQueryInterface(option) {
                return this.each(function () {
                    var $this = $(this);
                    var data = $this.data('slide-viewer');
                    if (!data) {
                        data = new SlideViewer(this, option);
                        $this.data('slide-viewer', data);
                    }
                    if (option && option.change) data.change(option.change);
                });
            }
        }]);

        return SlideViewer;
    })();

    $(document).on('click', '.change-slide', function () {
        var $this = $(this);
        var $target = $this.closest('.slide-images');
        var option = { change: $this.data('direction') };
        SlideViewer.jQueryInterface.call($target, option);
    });

    $.fn.slideViewer = SlideViewer.jQueryInterface;
    $.fn.slideViewer.Constructor = SlideViewer;
    $.fn.slideViewer.noConflict = function () {
        $.fn.slideViewer = $.fn.slideViewer;
        return SlideViewer.jQueryInterface;
    };

    $(function () {
        return $('.slide-images').slideViewer();
    });

    return SlideViewer;
})(jQuery);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvb3pha2kvQXBwbGljYXRpb25zL2JhY2tib25lL3NsaWRlX3ZpZXdlci9qcy9hcHBfZXMyMDE1LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsQ0FBQyxDQUFDLFVBQUMsQ0FBQyxFQUFLO1FBRUMsV0FBVztBQUNGLGlCQURULFdBQVcsQ0FDRCxPQUFPLEVBQUU7a0NBRG5CLFdBQVc7O0FBRVQsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQzFCLGdCQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBQ3JELGdCQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTs7QUFFaEIsZ0JBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtBQUNsQixnQkFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1NBQ2hCOztxQkFSQyxXQUFXOzttQkFVRix1QkFBRztBQUNWLG9CQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQzlDLG9CQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7QUFDakMsb0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ2hELG9CQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNoRCx1QkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDM0Qsb0JBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFD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QU8sQ0FBQyxlQUFlLENBQUMsQ0FBQTtBQUM5QyxZQUFNLE1BQU0sR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUE7QUFDbEQsbUJBQVcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQTtLQUNwRCxDQUFDLENBQUE7O0FBRUYsS0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLGVBQWUsQ0FBQTtBQUM5QyxLQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO0FBQzFDLEtBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsR0FBRyxZQUFNO0FBQ2hDLFNBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFBO0FBQ25DLGVBQU8sV0FBVyxDQUFDLGVBQWUsQ0FBQTtLQUNyQyxDQUFBOztBQUVELEtBQUMsQ0FBQztlQUFNLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxXQUFXLEVBQUU7S0FBQSxDQUFDLENBQUE7O0FBRXpDLFdBQU8sV0FBVyxDQUFBO0NBRXJCLENBQUEsQ0FBRSxNQUFNLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIrKCgkKSA9PiB7XG5cbiAgICBjbGFzcyBTbGlkZVZpZXdlciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkKGVsZW1lbnQpXG4gICAgICAgICAgICB0aGlzLiRzbGlkZXMgPSB0aGlzLiRlbGVtZW50LmNoaWxkcmVuKCcuc2xpZGUtaW1hZ2UnKVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gMFxuXG4gICAgICAgICAgICB0aGlzLnNob3dUb29sYmFyKClcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHNob3dUb29sYmFyKCkge1xuICAgICAgICAgICAgY29uc3QgdG9vbGJhciA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ3Rvb2xiYXInKVxuICAgICAgICAgICAgY29uc3QgcGFnZXIgPSB0aGlzLmdldFBhZ2VySHRtbCgpXG4gICAgICAgICAgICB0aGlzLiRwcmV2ID0gdGhpcy5nZXRDaGFuZ2VTbGlkZUljb25IdG1sKCdwcmV2JylcbiAgICAgICAgICAgIHRoaXMuJG5leHQgPSB0aGlzLmdldENoYW5nZVNsaWRlSWNvbkh0bWwoJ25leHQnKVxuICAgICAgICAgICAgdG9vbGJhci5hcHBlbmQodGhpcy4kcHJldikuYXBwZW5kKHBhZ2VyKS5hcHBlbmQodGhpcy4kbmV4dClcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuYXBwZW5kKHRvb2xiYXIpXG4gICAgICAgIH1cblxuICAgICAgICBnZXRQYWdlckh0bWwoKSB7XG4gICAgICAgICAgICBjb25zdCBwYWdlciA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ3NsaWRlLXBhZ2VyJylcbiAgICAgICAgICAgIHRoaXMuJGN1cnJlbnRQYWdlID0gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2N1cnJlbnQtcGFnZScpXG4gICAgICAgICAgICB0aGlzLiR0b3RhbFBhZ2UgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygndG90YWwtcGFnZScpXG4gICAgICAgICAgICByZXR1cm4gcGFnZXIuYXBwZW5kKHRoaXMuJGN1cnJlbnRQYWdlKS5hcHBlbmQoJyAvICcpLmFwcGVuZCh0aGlzLiR0b3RhbFBhZ2UpXG4gICAgICAgIH1cblxuICAgICAgICBnZXRDaGFuZ2VTbGlkZUljb25IdG1sKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnY2hhbmdlLXNsaWRlJykuYWRkQ2xhc3MoZGlyZWN0aW9uKS5kYXRhKCdkaXJlY3Rpb24nLCBkaXJlY3Rpb24pXG4gICAgICAgICAgICBjb25zdCBpY29uID0gJCgnPHNwYW4+JykuYWRkQ2xhc3ModGhpcy5nZXRJY29uQ2xhc3MoZGlyZWN0aW9uKSlcbiAgICAgICAgICAgIHJldHVybiBkaXYuYXBwZW5kKGljb24pXG4gICAgICAgIH1cblxuICAgICAgICBnZXRJY29uQ2xhc3MoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uID09PSAncHJldicgPyAnZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWxlZnQnIDpcbiAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPT09ICduZXh0JyA/ICdnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQnIDogJydcbiAgICAgICAgfVxuXG4gICAgICAgIGNoYW5nZShkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSB0aGlzLmdldE5leHRTbGlkZU51bShkaXJlY3Rpb24pXG4gICAgICAgICAgICBpZih0aGlzLmlzT3V0T2ZSYW5nZShuZXh0KSkgcmV0dXJuXG5cbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IG5leHRcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKVxuICAgICAgICAgICAgdGhpcy5zaG93U2xpZGUoKVxuICAgICAgICAgICAgdGhpcy5zdGFydE9yRW5kRGlzYWJsZWQoKVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYWdlTnVtKClcbiAgICAgICAgfVxuXG4gICAgICAgIGdldE5leHRTbGlkZU51bShkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09ICdwcmV2JyA/IHRoaXMuY3VycmVudCAtIDEgOlxuICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gJ25leHQnID8gdGhpcy5jdXJyZW50ICsgMSA6IHRoaXMuY3VycmVudFxuICAgICAgICB9XG5cbiAgICAgICAgaXNPdXRPZlJhbmdlKG51bSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bSA8IDAgfHwgdGhpcy4kc2xpZGVzLmxlbmd0aCA8PSBudW1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc2V0KCkge1xuICAgICAgICAgICAgdGhpcy4kc2xpZGVzLmhpZGUoKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAgIHRoaXMuJHByZXYucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJylcbiAgICAgICAgICAgIHRoaXMuJG5leHQucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJylcbiAgICAgICAgfVxuXG4gICAgICAgIHNob3dTbGlkZSgpIHtcbiAgICAgICAgICAgIGNvbnN0ICRzbGlkZSA9ICQodGhpcy4kc2xpZGVzLmdldCh0aGlzLmN1cnJlbnQpKVxuICAgICAgICAgICAgJHNsaWRlLnNob3coKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXJ0T3JFbmREaXNhYmxlZCgpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudCA9PT0gMCkgdGhpcy4kcHJldi5hZGRDbGFzcygnZGlzYWJsZWQnKVxuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50ID09PSB0aGlzLiRzbGlkZXMubGVuZ3RoIC0gMSkgdGhpcy4kbmV4dC5hZGRDbGFzcygnZGlzYWJsZWQnKVxuICAgICAgICB9XG5cbiAgICAgICAgY2hhbmdlUGFnZU51bSgpIHtcbiAgICAgICAgICAgIHRoaXMuJGN1cnJlbnRQYWdlLnRleHQodGhpcy5jdXJyZW50ICsgMSlcbiAgICAgICAgICAgIHRoaXMuJHRvdGFsUGFnZS50ZXh0KHRoaXMuJHNsaWRlcy5sZW5ndGgpXG4gICAgICAgIH1cblxuICAgICAgICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKG9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9ICR0aGlzLmRhdGEoJ3NsaWRlLXZpZXdlcicpXG4gICAgICAgICAgICAgICAgaWYoIWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IG5ldyBTbGlkZVZpZXdlcih0aGlzLCBvcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmRhdGEoJ3NsaWRlLXZpZXdlcicsIGRhdGEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbiAmJiBvcHRpb24uY2hhbmdlKSBkYXRhLmNoYW5nZShvcHRpb24uY2hhbmdlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2hhbmdlLXNsaWRlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJHRoaXMuY2xvc2VzdCgnLnNsaWRlLWltYWdlcycpXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHsgY2hhbmdlOiAkdGhpcy5kYXRhKCdkaXJlY3Rpb24nKSB9XG4gICAgICAgIFNsaWRlVmlld2VyLmpRdWVyeUludGVyZmFjZS5jYWxsKCR0YXJnZXQsIG9wdGlvbilcbiAgICB9KVxuXG4gICAgJC5mbi5zbGlkZVZpZXdlciA9IFNsaWRlVmlld2VyLmpRdWVyeUludGVyZmFjZVxuICAgICQuZm4uc2xpZGVWaWV3ZXIuQ29uc3RydWN0b3IgPSBTbGlkZVZpZXdlclxuICAgICQuZm4uc2xpZGVWaWV3ZXIubm9Db25mbGljdCA9ICgpID0+IHtcbiAgICAgICAgJC5mbi5zbGlkZVZpZXdlciA9ICQuZm4uc2xpZGVWaWV3ZXJcbiAgICAgICAgcmV0dXJuIFNsaWRlVmlld2VyLmpRdWVyeUludGVyZmFjZVxuICAgIH1cblxuICAgICQoKCkgPT4gJCgnLnNsaWRlLWltYWdlcycpLnNsaWRlVmlld2VyKCkpXG5cbiAgICByZXR1cm4gU2xpZGVWaWV3ZXJcblxufSkoalF1ZXJ5KTtcbiJdfQ==
